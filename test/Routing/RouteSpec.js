/* global describe, it */

import { assert } from 'chai';
import XRegExp from 'xregexp';

import Route from '~/Routing/Route';
import Router from '~/Routing/Router';
import Obj from '~/Core/Obj';


// Objects used
const router = new Router();
const parentRouteSimple = new Route(router, null, '/foo', { main: () => {
	return 'foo-page';
} });

const regexLib = {
	param: /[^\/]+/,
	wildcard: /.+/,
	foo: /foo\-\d+/
};

const parentRouteComplex = new Route(router, parentRouteSimple, '/bar/:foo_id/:bar_id', { })
	.constrain('foo_id', regexLib.foo);


describe('Routing.Route', () => {

	it('should extend Core.Obj', () => {
		assert.instanceOf(new Route(router, null, '/'), Obj);
	});

	describe('#getFullPattern', () => {

		it('should combine parent patterns', () => {

			let route = new Route(router, parentRouteSimple, '/bar', {  });
			assert.equal(route.getFullPattern(), '/foo/bar');

			route = new Route(router, parentRouteComplex, '/boo-boo/:boo', { });
			assert.equal(route.getFullPattern(), '/foo/bar/:foo_id/:bar_id/boo-boo/:boo');

		});

	});



	describe('#_parsePattern', () => {

		it('should return a correct XRegExp for a simple route', () => {

			let route = new Route(router, null, '/page', {  });
			
			let expected = XRegExp.build('^/page$');
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

		});

		it('should return a correct XRegExp for a simple route with a standard parameter', () => {

			let route = new Route(router, null, '/page/:slug', {  });
			
			let expected = XRegExp.build('^/page/(?<slug>{{param}})$', regexLib);
			let result = route.getRegExp();

			let expectedParams = ['slug'];

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

			assert.deepEqual(expectedParams, route.parameters, 'Parameters are not correct');

		});

		it('should return a correct XRegExp for a route with two standard parameters', () => {

			let route = new Route(router, null, '/category/:category_id/products/:product_id', {  });
			
			let expected = XRegExp.build('^/category/(?<category_id>{{param}})/products/(?<product_id>{{param}})$', regexLib);
			let result = route.getRegExp();

			let expectedParams = ['category_id', 'product_id'];

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

			assert.deepEqual(expectedParams, route.parameters, 'Parameters are not correct');
		});

		it('should return a correct XRegExp for a route with a constraint', () => {

			regexLib.custom1 = /abc\d/;
			let route = new Route(router, null, '/category/:category_id/products/:product_id', {  })
				.constrain('category_id', regexLib.custom1);
			
			let expected = XRegExp.build('^/category/(?<category_id>{{custom1}})/products/(?<product_id>{{param}})$', regexLib);
			let result = route.getRegExp();

			let expectedParams = ['category_id', 'product_id'];

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

			assert.deepEqual(expectedParams, route.parameters, 'Parameters are not correct');

		});

		it('should return a correct XRegExp for a route with a parent', () => {

			let route = new Route(router, parentRouteSimple, '/bar', {  });

			let expected = XRegExp.build('^\/foo\/bar$');
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);


		});


		it('should return a correct XRegExp for a route with a parent using parameters and constraints', () => {

			regexLib.buddy = /fred|john/;
			let route = new Route(router, parentRouteComplex, '/boo-boo/:boo/buddy/:buddy_name', {  })
				.constrain('buddy_name', regexLib.buddy);

			let expectedParams = ['foo_id', 'bar_id', 'boo', 'buddy_name'];
			let expected = XRegExp.build('^\/foo\/bar\/(?<foo_id>{{foo}})\/(?<bar_id>{{param}})\/boo-boo\/(?<boo>{{param}})\/buddy\/(?<buddy_name>{{buddy}})$', regexLib);
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

			assert.deepEqual(expectedParams, route.parameters, 'Parameters are not correct');

		});

		it('should return a correct XRegExp for a wildcard route', () => {

			let route = new Route(router, parentRouteSimple, '/*bar', {});
			let expectedParams = ['bar'];

			let expected = XRegExp.build('^\/foo\/(?<bar>{{wildcard}})$', regexLib);
			let result = route.getRegExp();

			assert.instanceOf(result, XRegExp);
			assert.equal(result.source, expected.source);

			assert.deepEqual(expectedParams, route.parameters, 'Parameters are not correct');


		});




	});



});

