import _, { Dictionary } from 'underscore';
import Observable from './Observable';

/**
 * @module Core
 */
export default class SettingsObject extends Observable
{

    allowedKeys : string[];
    
	constructor(defaultSettings : Dictionary<any> = {}, allowedKeys : string[] = []) {
		
		// Instantiate with default settings
		super(defaultSettings);

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
	apply(settings : Dictionary<any>) {

		// Apply each key individually
		_.each(settings, (value, key) => {
			this.set(key, value);			
		});

		return this;

	}


	// Extra check for allowedKeys.
	set(key : string, value : any) {

		// Is it allowed?
		if (this.allowedKeys && this.allowedKeys.length > 0 && !_.contains(this.allowedKeys,key)) {
			throw new Error(`This SettingsObject does not have a setting for "${key}". The allowed settings are: ${this.allowedKeys.join(', ')}`);
		}

		// Do it.
		return super.set(key, value);
	

	} 


}