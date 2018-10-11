import _ from 'underscore';

import Observable from '../Core/Observable';
import Chainable from '../Helpers/Chainable';

/**
 * @module Core
 */
class SettingsObject extends Observable
{

	/**
	 * @class Core.SettingsObject
	 * @extends Core.Observable
	 *
	 * @constructor
	 * @param {object}  defaultSettings  	Initialize with these default settings
	 * @param {array}   [allowedKeys] 		Optional array of allowed keys. By default all keys are allowed	 
	 */
	constructor(defaultSettings = {}, allowedKeys = []) {
		
		// Instantiate with default settings
		super(defaultSettings);

		/**
		 * @property allowedKeys
		 * @type Array
		 */
		this.allowedKeys = allowedKeys;
		

		this.notificationsDisabled = true;

	}

	/**
	 * Apply given settings
	 *
	 * @method apply
	 * @param {object} 	settings	A hash-object with keys and values
	 * @chainable
	 */
	apply(settings) {

		// Apply each key individually
		_.each(settings, (value, key) => {
			this.set(key, value);			
		});

		return this;

	}


	// Extra check for allowedKeys.
	set(key, value) {

		// Is it allowed?
		if (this.allowedKeys && this.allowedKeys.length > 0 && !_.contains(this.allowedKeys,key)) {
			throw new Error('This SettingsObject does not have a setting for "' + key + '". The allowed settings are: ' + this.allowedKeys.join(', '));
		}

		// Do it.
		return super.set(key, value);
	

	} 


}


export default Chainable(SettingsObject);