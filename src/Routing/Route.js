import XRegExp from 'xregexp';
import Obj from '~/Core/Obj';

/**
 * @module Routing
 */
class Route extends Obj
{
	
	/**
	 * A Route configures a uri and its actions, parameters,
	 * and models.
	 * 
	 * @class Routing.Route
	 * @extends Core.Object
	 * 
	 * @constructor
	 * @param {Routing.Route} 	parent 		The route that the route you are creating is to be child of. Use `null` when there is no parent.
	 * @param {Routing.Router} 	router 		The application's Router instance
	 * @param {string} 			pattern 	The route's pattern, not including the parent's pattern
	 * @param {object}  		actions		An object containing one or more actions, keyed by the target ViewContainer
	 * @param {object = {}}		options		An object containing one or more configuration options
	 */
	constructor(parent, router, pattern, actions, options = {}) {
		
		// Basics
		super();
		
		// Localize
		this._parent = parent;
		this._router = router;
		this._pattern = pattern;

		// Parse the pattern
		this._regExp = this._parsePattern();

		// Parse actions
		this.actions = this._parseActions(actions);



	}	



	////////////////////
	// Public methods //
	////////////////////

	/**
	 * Get the full Route pattern within the application for this route,
	 * including any parent Routes.
	 *
	 * @method getFullPattern
	 * @return {string}
	 */
	getFullPattern() {

		// My pattern as base
		var p = this.pattern;

		// Loop through parents upwards
		let parent = this._parent;
		while (parent) {

			// Prefix the pattern
			p = parent.pattern + p;

			// Level up
			parent = parent.parentRoute;
		}

		return p;

	}



	/**
	 * Get the Route's complete Regular Expression, including
	 * parameters
	 * 
	 * @method getRegExp
	 * @return {XRegExp}
	 */
	getRegExp() {
		
		// Not yet set?
		if (this._regExp === undefined) {


			// Expression
			let exp = '^';


			console.log(exp);

			exp = '^/page$';

			// Create it
			this._regExp = XRegExp.build(exp);

		}

		// Return it
		return this._regExp;

	}



	//////////////////////
	// Internal methods //
	//////////////////////

	_parsePattern() {

		
	}

	_parseActions() {



	}





	////////////////
	// Properties //
	////////////////

	/**
	 * @property parentRoute
	 * @type Routing.Route
	 */
	get parentRoute() {
		return this._parent;
	}

	/**
	 * The application's router
	 * 
	 * @property router
	 * @type Routing.Router
	 */
	get router() {
		return this._router;
	}

	/**
	 * @property pattern
	 * @type string
	 */
	get pattern() {
		return this._pattern;
	}


	

}


module.exports = Route;