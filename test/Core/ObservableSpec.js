import { assert } from 'chai';
import Observable from '../../src/Core/Observable';
import Object from '../../src/Core/Object';


var obj = new Observable();

describe('Chicken_Core_Observable', () => {

	it('should extend Object', () => {
		assert.instanceOf(obj, Object);
	});


	describe('#set(keyName, value)', () => {
		it('should return itself', () => {
			assert.equal(obj.set('foo', 'bar'), obj);
		});
	});
	it('should remember a property when set', () => {

		var foo = 'bar';
		obj.set('foo', foo);
		assert.strictEqual(obj.get('foo'), foo);

	});

	describe('#study(callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.study(function() {}), obj);
		});
		it('should call the callback when any property is updated', () => {

			var called = false;
			var callback = (changedAttributes) => {
				assert.deepEqual(changedAttributes, ['foo']);
				called = true;
			};
			obj.study(callback);

			obj.set('foo', 'bar');
			assert.equal(called, true);

			obj.neglect(callback);


		});
	});

	
	describe('#neglect(callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.neglect(function() {}), obj);
		});
		it('should not call the callback when any property is updated after the object is neglected', () => {

			var called = false;
			var callback = (changedAttributes) => {
				assert.deepEqual(changedAttributes, ['foo']);
				called = true;
			};
			obj.study(callback);
			obj.neglect(callback);

			obj.set('foo', 'bar');
			assert.equal(called, false);



		});
	});




	describe('#observe(keyName, callback)', () => {

		it('should return itself', () => {
			assert.equal(obj.observe('foo', function() {}), obj);
		});

		it('should call the callback when the property itself is updated', () => {

			var called = false;
			obj.observe('foo', () => {
				assert.equal(obj.get('foo'), 'bar');
				called = true;
			});

			obj.set('foo', 'bar');

			assert.equal(called, true);

		});

		it('should call the callback when a child property of the property is updated', () => {

			// Create child observable
			var called = false;
			var child = new Observable();
			child.set('hello', 'world');
			obj.set('child', child);
			obj.observe('child', () => {

				// Check that the observable is returned
				assert.equal(child.get('hello'), 'moon');
				called = true;

			});


			// Now change child value
			child.set('hello', 'moon');
			assert.equal(called, true);

		});

	});

	describe('#disregard(keyName, callback)', () => {
		it('should return itself', () => {
			assert.equal(obj.disregard('foo', function() {}), obj);
		});

		it('should not call the callback when the property is updated after it is disregarded', () => {

			var called = false;
			var callback = (value) => {
				called = true;
			};
			obj.observe('foo', callback);
			obj.disregard('foo', callback);
			obj.set('foo', 'bar');

			assert.equal(called, false);

		});

	});


});
