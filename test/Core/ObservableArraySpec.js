/* global describe, it */

import { assert } from 'chai';
import Observable from '~/Core/Observable';
import ObservableArray from '~/Core/ObservableArray';
import Obj from '~/Core/Obj';


var arr = new ObservableArray();

describe('Core.ObservableArray', () => {

	it('should extend Core.Obj', () => {
		assert.instanceOf(arr, Obj);
	});

	describe('#add(...args)', () => {

		it('should allow adding 1 item', () => {

			let lengthBefore = arr.length;
			arr.add('item0');
			assert.equal(arr.length, lengthBefore + 1);
		
		});
		it('should allow adding multiple items', () => {

			let lengthBefore = arr.length;
			arr.add('item0', 'item1', 'item2');
			assert.equal(arr.length, lengthBefore + 3);	

		});
	});

	describe('#delete(...args)', () => {

		it('should allow deleting 1 item', () => {

			arr.add('item100');
			
			let lengthBefore = arr.length;
			
			arr.delete('item100');
			
			assert.equal(arr.length, lengthBefore - 1);

		});
		it('should allow deleting multiple items', () => {

			var obj = { foo: 'bar' };
			var number = 100;
			var str = 'China';
			
			arr.add(obj, number, str);
			
			let lengthBefore = arr.length;

			arr.delete(number, str, obj);
			assert.equal(arr.length, lengthBefore - 3);

		});

	});

	describe('#empty()', () => {

		it('should empty the array', () => {

			arr.add('nonsensical', 'items', 'to', 'empty');
			arr.empty();

			assert.equal(arr.length, 0);

		});

	});

	describe('constructor(...values)', () => {

		it('should store the items in the array', () => {

			let a = new ObservableArray('a', 'b', 'c');
			assert.equal(a.length, 3);

		});
	});


	describe('#get(indexOrKey)', () => {

		it('should retrieve value when passing an index', () => {

			var a = new ObservableArray('item0', 'item1', 'item2', 'item3');
			assert.equal(a.get(1), 'item1');
			assert.equal(a.get(3), 'item3');
			assert.isUndefined(a.get(4));


		});

		it('should retrieve a value when passing a deep-get key', () => {

			var a = new ObservableArray('item0', new Observable({
				'foo': 'bar'
			}));
			assert.instanceOf(a.get(1), Observable);
			assert.equal(a.get('1.foo'), 'bar');

		});


	});


	describe('#study() and add-event', () => {

		it('should call the callback when an item is added', () => {
			let a = new ObservableArray();
			
			let calledStudy = 0;
			let calledAdd = 0;
			let calledDelete = 0;
			
			a.study(() => { calledStudy++; });
			a.on('add', (items) => { 
				assert.instanceOf(items, Array);
				assert.isAtLeast(items.length, 1);
				calledAdd++;
			});
			a.on('delete', (items) => { 
				assert.instanceOf(items, Array);
				assert.isAtLeast(items.length, 1);
				calledDelete++;
			});
			
			a.add('item1', 'item 2');
			a.add('item3');
			a.delete('item2');
			a.add('item4');
			a.delete('item1', 'item4');


			assert.equal(calledStudy, 5, 'Number of changes not correct');
			assert.equal(calledAdd, 3, 'Number of adds not correct');
			assert.equal(calledDelete, 2, 'Number of deletes not correct');

		});
	});


});
