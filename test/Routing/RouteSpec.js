/* global describe, it */

import { assert } from 'chai';
import XRegExp from 'xregexp';

import Route from '~/Routing/Route';
import Router from '~/Routing/Router';
import Obj from '~/Core/Obj';


// Objects used
const router = new Router();
const parentRouteSimple = new Route(null, router, '/foo', { main: () => {
	return 'foo-page';
} });

const regexLib = {
	param: /[a-zA-Z0-9\-]+/

};


describe('Routing.Route', () => {

	it('should extend Core.Obj', () => {
		assert.instanceOf(new Route(), Obj);
	});

	describe('#_parsePattern', () => {

		it('should return a correct XRegExp for a simple route', () => {

			let route = new Route(null, router, '/page', { main: () => { } }, {});
			
			let expected = XRegExp.build('^/page$');
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

		});

		it('should return a correct XRegExp for a simple route with a parameter', () => {

			let route = new Route(null, router, '/page/:slug', { main: () => { } }, {});
			
			let expected = XRegExp.build('^/page/(?<slug>{{param}}+)$', regexLib);
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

		});


	});



});

