import _ from 'underscore';
import XRegExp from 'xregexp';

import Obj from '../Core/Obj';
import RouteMatch from '../Routing/RouteMatch';
import Model from '../Data/Model';

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
	 * @param {Routing.Router} 	router 				The application's Router instance
	 * @param {Routing.Route} 	parent 				The route that the route you are creating is to be child of. Use `null` when there is no parent.
	 * @param {string} 			pattern 			The route's pattern, not including the parent's pattern
	 * @param {object|string}	[actions=null]		An action string or object containing one or more actions, keyed by the target ViewContainer. 
	 *                                        		If you don't define actions this route will be made abstract.
	 * @param {object}			[options={}]		An object containing one or more configuration options
	 */
	constructor(router, parent, pattern, actions = null, options = {}) {
		
		// Basics
		super();
		
		// Private vars
		this._parameterConstraints = new Map();		
		this._actions = actions;
		

		////////////////
		// Properties //
		////////////////

		/**
		 * The Route that this Route is nested in
		 * 
		 * @property parentRoute
		 * @type {Routing.Route}
		 */
		this.parentRoute = parent;
		

		/**
		 * The Router that this Route is a part of
		 * 
		 * @property router
		 * @type {Routing.Router}
		 */
		this.router = router;

		/**
		 * The defined pattern, not including any parent patterns
		 * 
		 * @property pattern
		 * @type {string}
		 */
		this.pattern = pattern.replace(/(.)\/$/, '$1'); // Remove trailing slash


		/**
		 * Route-specific error handlers
		 *
		 * @property errorHandlers
		 * @type {Object}
		 */
		this.errorHandlers = {};



		/**
		 * The parameter names used in this route
		 * 
		 * @property parameters
		 * @type {array}
		 */
		this.parameters = [];


		/**
		 * @property nested
		 * @type {Array}
		 */
		this.nested = {};

		/**
		 * The options used when defining this Route
		 * 
		 * @property options
		 * @type {object}
		 */
		this.options = _.defaults(options, {
			abstract: actions === null,
			as: null,
			viewContainer: 'main',
			middleware: [],
			services: []
		});



		/**
		 * The name of the route you can use to link to. This is only 
		 * set if you used the 'as' option.
		 * 
		 * @property name
		 * @type {string}
		 */
		this.name = null;

		/**
		 * When true, the route's action(s) will refresh when the query string changes
		 * 
		 * @property acceptsQuery
		 * @type {Boolean}
		 */
		this.acceptsQuery = false;


		/**
		 * When true, the route's action(s) will refresh when the Request flash-data changes
		 * @type {Boolean}
		 */
		this.acceptsFlash = false;

		

		// Add me to parent route
		if (parent) {
			parent.nested[this.pattern] = this;
		}

	}	



	////////////////////
	// Public methods //
	////////////////////

	/**
	 * Call this when you want to define routes nested under the current one. The provided callback
	 * will be called with the Router as context, allowing you to use this.route to define the nested
	 * routes.
	 *
	 * @example
	 * 	Chicken.createApplication($('#application'), {
	 * 		baseUrl: '/'
	 * 	}).routes(function() {
	 *  
	 *  	this.route('/animals', 'Animal@index')                            // /animals
	 *  		.nest(function() {
	 *  			this.route('/dog', 'Animal@dog')                          // /animals/dog
	 *  				.nest({ viewContainer: 'dogs' }, function() {
	 *      				this.route('/:dogName', 'Animal@dogDetails');     // /animals/dog/:dogName
	 *      				this.route('/about-dogs', 'Animal@aboutDogs');    // /animals/dog/about-dogs
	 *  				});  				
	 *      		this.route('/cat', 'Animal@cat');                         // /animals/cat
	 *  		 });
	 *  	
	 *   
	 * 	});
	 * 	
	 *
	 * @method nest
	 * @param {object} 		[options]   An optional options hash, to apply to all nested routes
	 * @param {function} 	callback 	Your callback
	 * @chainable
	 */
	nest(...args) {

		// Check if options were given
		var callback = args.pop();
		var options = args.length > 0 ? args.pop() : {};

		// Make me the parent route
		this.router.group(_.defaults({
			parentRoute: this
		}, options), callback);

		return this;

	}


	abstract() {
		this.options.abstract = true;
		return this;
	}


	/**
	 * Check whether this Route matches the given Request. If so, the method
	 * will return a complete RouteMatch. If not, the method will return `false`.
	 * 
	 * @method match
	 * @param  {Routing.Request} request     
	 * @return {Routing.RouteMatch|boolean}  
	 */
	match(request) {

		// Am I an abstract route?
		if (this.isAbstract()) return;
			
		// Does it match?
		let match = XRegExp.exec(request.uri, this.getRegExp());

		// No match?
		if (!match) return false;

		// Do I have a nested / route?
		if (this.nested['/']) {

			// Use that route instead of me...
			request.uri = request.uri + '/';
			return this.nested['/'].match(request);

		}

		// We matched! Let's create a match object.
		return new RouteMatch(this, match, request);

	}


	error(key, callback) {

		if (this.errorHandlers[key] === undefined) this.errorHandlers[key] = [];
		this.errorHandlers[key].push(callback);
		return this;

	}


	/**
	 * Get the action definitions for the Route. An action definition can either
	 * be a Controller action (e.g.: `Product@index`), or a callback. The result
	 * is keyed by the target ViewContainer name.
	 *
	 * @method getActions
	 * @return {object} 
	 */
	getActions() {

		// Is it still a string (Controller@action) or callback?
		if (typeof this._actions === 'string' || typeof this._actions === 'function') {

			// Wrap in object using default view container
			var actions = {};
			actions[this.options.viewContainer] = this._actions;
			this._actions = actions;

		}

		return this._actions;

	}

	/**
	 * Get the action definitions for this Route, and any parent routes that it may have.
	 *
	 * @method getFullActions
	 * @return {object} 
	 */
	getFullActions() {

		// Start with mine
		var actions = this.getActions();

		// Add parent
		if (this.parentRoute) {
			return _.defaults(actions, this.parentRoute.actions);
		} 
		return actions;

	}


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

		// Get parent's full pattern
		if (this.parentRoute) {
			var parentPart = this.parentRoute.getFullPattern();
			if (parentPart !== '/') {
				p = parentPart + p;
			}
		}		

		return p;

	}


	makeUrl(attributes = {}) {

		// Get full pattern
		let pattern = this.getFullPattern();
		_.each(attributes, (value, key) => {
			
			// Is the value a model?
			if (value instanceof Model) value = value.get('id');

			pattern = pattern.split(':' + key).join(value);			

		});

		return pattern;

	}


	/**
	 * Get all parameter constraints for this Route, combining constraints
	 * defined by parent routes.
	 *
	 * @method getAllParameterConstraints
	 * @return {Map} Map with a regular expression constraint for each constrained parameter
	 */
	getAllParameterConstraints() {

		// My constraints (don't overwrite)
		var c = new Map(this._parameterConstraints);

		// Get parent's constraints
		if (this.parentRoute) {

			// Prefix the pattern
			this.parentRoute.getAllParameterConstraints().forEach((regex, key) => {
				if (!c.has(key)) c.set(key, regex);
			});
			
		}

		return c;


	}


	getMiddlewareNames() {

		return this.options.middleware;

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

			// Collect buildingBlocks (a regular expression pattern for each parameter)
			let buildingBlocks = {};

			// Convert :params into regex with building blocks 
			// (see XRegExp.build documentation)
			let constraints = this.getAllParameterConstraints();
			let exp = XRegExp.replace(this.getFullPattern(), /(([\:\*])([a-zA-Z\-\_]+))/, (match, complete, paramType, paramName) => {
				
				// Wildcard?
				let paramRegex;
				if (paramType === '*') {

					// Use wildcard
					paramRegex = Route.ParameterType.Wildcard;

				} else {

					// Check if there is a constraint
					paramRegex = constraints.has(paramName) ? constraints.get(paramName) : Route.ParameterType.Standard;

				}

				// Store as building block for regex
				buildingBlocks[paramName] = paramRegex;

				// Store parameter
				this.parameters.push(paramName);


				// Replace with a building block using named parameter
				return '({{' + paramName + '}})';

			}, 'all');


			// Create it
			this._regExp = XRegExp.build('^' + exp + '$', buildingBlocks);

		}

		// Return it
		return this._regExp;

	}

	/**
	 * Add a constraint to a parameter, by supplying a regular expression.
	 * 
	 * @method constrain
	 * @param  {string} parameterName The name of the parameter to add constrains to
	 * @param  {RegExp} regExp        A regular expression to use when matching the parameter
	 * @chainable
	 */
	constrain(parameterName, regExp) {

		// Store it
		this._parameterConstraints.set(parameterName, regExp);

		return this;

	}

	acceptQuery(accept = true) {

		this.acceptsQuery = accept;
		return this;

	}
	
	acceptFlash(accept = true) {

		this.acceptsFlash = accept;
		return this;

	}



	/**
	 * Set the name of this Route
	 *
	 * @method as
	 * @param  {string} name 
	 * @chainable
	 */
	as(name) {

		// Does the name start with a .?
		if (/^\./.test(name) && this.parentRoute && this.parentRoute.name) {

			// Strip off a part for each ..
			let parts = this.parentRoute.name.split(/\./);
			while (/^\.\./.test(name)) {
				parts.pop();
				name = name.substr(1);
			}

			// Relative name. Add parent name as prefix
			name = `${parts.join('.')}${name}`;

		}

		// Store name
		this.name = name;

		// Store in router
		this.router.namedRoutes.set(name, this);

		return this;

	}


	middleware(...keys) {

		this.options.middleware = _.unique(_.flatten([this.options.middleware, keys]));
		return this;

	}

	services(...keys) {

		this.options.services = _.unique(_.flatten([this.options.services, keys]));
		return this;

	}


	/**
	 * An abstract Route can never be matched. This is useful when you have a Route
	 * that only has subroutes, but no actions itself. If you define a Route without
	 * actions, this will automatically be set to true.
	 * 
	 * @method isAbstract
	 * @return {Boolean}
	 */
	isAbstract() {
		return !!this.options.abstract;
	}



}

Route.ParameterType = {

	/**
	 * Regular expression for a standard parameter 
	 *
	 * Default: `/[^\/]+/`
	 * 
	 * @property ParameterType.Standard
	 * @static
	 * @type {RegExp}
	 */
	Standard: /[^\/]+/,
	
	/**
	 * Regular expression for a wildcard parameter
	 *
	 * Default: `/.+/`
	 * 
	 * @property ParameterType.Wildcard
	 * @static
	 * @type {RegExp}
	 */
	Wildcard: /.+/


};




export default Route;