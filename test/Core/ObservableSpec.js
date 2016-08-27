/* global describe, it */

import { assert } from 'chai';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import Obj from '~/Core/Obj';


var obj = new Observable();

describe('Core.Observable', () => {

	it('should extend Core.Obj', () => {
		assert.instanceOf(obj, Obj);
	});


	describe('#constructor(initValues, convertObjectToObservables)', () => {
		it('should store initValues', () => {
			let o = new Observable({
				'foo': 'bar'
			});
			assert.equal(o.get('foo'), 'bar');
		});
		it('should convert Objects in initValues to Observables', () => {
			let o = new Observable({
				'child': {
					'foo': 'bar'
				}
			});
			assert.instanceOf(o.get('child'), Observable);
		});		
	});


	describe('#set(keyName, value)', () => {
		it('should return itself', () => {
			assert.equal(obj.set('foo', 'bar'), obj);
		});
		it('should allow deep setting of attributes in child Observables', () => {

			obj.set('a.third.level', 'inception');
			assert.instanceOf(obj.get('a'), Observable, 'Not able to get value for "a"');
			assert.instanceOf(obj.get('a.third'), Observable, 'Not able to get value for "a.third"');
			assert.equal(obj.get('a.third.level'), 'inception');

		});
		it('should allow deep setting of ObservableArray\'s', () => {

			obj.set('words.0', 'Hi');
			obj.set('words.1', 'Bye');
			obj.set('planets.0.name', 'Mercury');
			obj.set('planets.0.size', 102051);
			obj.set('planets.1', {
				name: 'Venus',
				size: 6565419
			}, true);	// Convert object to observable
			
			assert.instanceOf(obj.get('words'), ObservableArray, 'words is not an ObservableArray');
			assert.strictEqual(obj.get('words.0'), 'Hi');
			assert.strictEqual(obj.get('words.1'), 'Bye');

			assert.instanceOf(obj.get('planets'), ObservableArray);
			assert.instanceOf(obj.get('planets.0'), Observable);
			assert.strictEqual(obj.get('planets.0.name'), 'Mercury');
			assert.strictEqual(obj.get('planets.0.size'), 102051);

			assert.instanceOf(obj.get('planets.1'), Observable);
			assert.strictEqual(obj.get('planets.1.name'), 'Venus');
			assert.strictEqual(obj.get('planets.1.size'), 6565419);

		});

		it('should allow deep setting and getting using wildcards', () => {

			obj.set('planets.0.name', 'Mercury');
			obj.set('planets.0.size', 102051);
			obj.set('planets.1.name', 'Venus');
			obj.set('planets.1.size', 6565419);

			assert.deepEqual(obj.get('planets.*.name'), ['Mercury', 'Venus']);

		});

	});
	describe('#get(keyName)', () => {
		it('should return a value when the attribute set', () => {

			var foo = 'bar';
			obj.set('foo', foo);
			assert.strictEqual(obj.get('foo'), foo);

		});
	});

	describe('#study(callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.study(function() {}), obj);
		});
		it('should call the callback when any attribute is updated', (done) => {

			var called = false;
			var callback = (changedAttributes) => {
				done();
				obj.neglect(callback);
			};
			obj.study(callback);
			obj.set('foo', 'bar');

		});
	});

	
	describe('#neglect(callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.neglect(function() {}), obj);
		});
		
	});




	describe('#observe(keyName, callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.observe('foo', function() {}), obj);
		});

		it('should call the callback when the attribute itself is updated', (done) => {

			var called = false;
			var callback = () => {
				done();
				obj.disregard('foo', callback);
			};
			obj.observe('foo', callback);
			obj.set('foo', 'bar');

		});

		it('should call the callback when a child attribute of the attribute is updated', (done) => {

			// Create child observable
			var called = false;
			var child = new Observable();
			child.set('hello', 'world');
			obj.set('child', child);
			obj.observe('child', () => {

				done();

			});


			// Now change child value
			child.set('hello', 'moon');
			

		});

	});

	describe('#disregard(keyName, callback)', () => {
		it('should return itself', () => {
			assert.equal(obj.disregard('foo', function() {}), obj);
		});

		it('should not call the callback when the attribute is updated after it is disregarded', () => {

			var called = false;
			var callback = () => {
				called = true;
			};
			obj.observe('foo', callback);
			obj.disregard('foo', callback);
			obj.set('foo', 'bar');

			assert.equal(called, false);

		});

	});




});
