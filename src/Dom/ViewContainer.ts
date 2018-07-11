import Element from "./Element";
import Application from "../Application";
import Action from "../Routing/Action";
import { Dictionary } from "../../node_modules/@types/underscore";
import Obj from "../Core/Obj";
import Transition from "./Transition";
import View from "./View";

export default class ViewContainer extends Element
{

    static Classes : Dictionary<string> = {
	    Initialized: 'initialized',
	    Loading: 'loading'
    };
    
    static ElementSelector : string = 'view-container:not(.initialized),[view-container]:not(.initialized)';
    static DefaultName : string = 'main';
    static getViewName($element : JQuery) : string {

        // Get it either from the name-attr or view-attr
        var name = $element.is('view-container') ? $element.attr('name') : $element.attr('view-container');

        // No?
        if (!name) name = ViewContainer.DefaultName;

        return name;

    }
    static any : Obj = new Obj();



    private _isLoading : boolean = false;    
    transitionsDisabled : boolean = false;

    name : string;
	currentAction? : Action;
	currentView? : View;
    $currentContent? : JQuery;
    defaultTransition? : string;


	constructor($element : JQuery, application : Application) {

		super($element);

		this.name = ViewContainer.getViewName($element);

		this.defaultTransition = $element.attr('transition');


	}

	/**
	 * Initialize the ViewContainer. 
	 *
	 * @method initialize
	 * @chainable
	 */
	initialize() {
		this.$element.addClass(ViewContainer.Classes.Initialized);
		return this;
	}


	setContent(content : string | DocumentFragment, setLoadingFalse = true) : ViewContainer {

		// Transition?
		let transition = this.currentAction!.transition;
		if (transition === undefined) {

			// Use my default transition
			transition = this.defaultTransition;

		}

		// No longer loading
		if (setLoadingFalse) this.setLoading(false);

		// Use transition?
		this.transitionContent(content, transition!).then(() => {
			
			// Apply hooks
			ViewContainer.any.trigger('render', this);
	

		});

		return this;

	}

	
	transitionContent(newContent : string | DocumentFragment, transitionName : string) {

		return new Promise((resolve) => {

			// Put content into container
			let $newContent = $('<div class="view-container-element" />').html(newContent.toString());
			
			// No transition?
			if (!transitionName || transitionName === 'none' || this.transitionsDisabled) {
				
				// Set content now
				this._fireHooks('beforeRender');
				this.$element.append($newContent);
				
				// Remove old content
				if (this.$currentContent) {
					this.$currentContent.remove();
				}
				
				// Switch!
				this.$currentContent = $newContent;
				this.trigger('content', newContent);
				this._fireHooks('afterRender');
				
				
				return resolve();
				
			}

			// Create transition
			let transition = new Transition(this.$element, this.$currentContent!, $newContent, transitionName);
			this._fireHooks('beforeRender');				
			transition.play().then(() => {

				
				// Remove old content
				if (this.$currentContent) {
					this.$currentContent.remove();
				}
				
				// Switch!
				this.$currentContent = $newContent;
				this.trigger('content', newContent);
				this._fireHooks('afterRender');

				// Done!
				resolve();

			});
			
			
		});
	}


	setView(view : View) {

		this.currentView = view;
		return this;

	}

	setAction(action) {
		this.currentAction = action;
		return this;
	}



	setLoading(loading = true) {
		this._isLoading = loading;
		this.$element.toggleClass(ViewContainer.Classes.Loading, loading);
		return this;
	}


	getIsLoading() {
		return this._isLoading;
	}

	isInDom() {

		return this.$element.closest(document.documentElement).length > 0;

	}


}