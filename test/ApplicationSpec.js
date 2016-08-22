/* global describe, it */

import { assert } from 'chai';
import jsdom from 'jsdom';
import jQuery from 'jquery';

import Application from '~/Application';
import Obj from '~/Core/Obj';


// Initialize jQuery
var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var window = document.defaultView;
var $ = jQuery(window);
var $body = $('body');

// Init objects
const $app = $('<div id="application"></div>').appendTo($body);
const app = new Application($app);



describe('Application', function() {

	it('should extend Object', () => {
		assert.instanceOf(app, Obj);		
	});

	it('should have a global jQuery $app object that is in the dom', () => {
		assert.equal(app.$app.jquery, $.fn.jquery);
		assert.equal(app.$app.parent().length, 1);
	});






});
