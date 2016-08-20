import { assert } from 'chai';
import Chicken_Core_Object from '../../src/Core/Object';


var obj = new Chicken_Core_Object();

describe('Chicken_Core_Object', function() {
	
	describe('#on(eventName, callback)', function() {
		it('should return itself', function() {
			assert.equal(obj.on('testEvent', function() { }), obj);
		});
	});

	describe('#trigger(eventName, ...args)', function() {
		it('should return itself', function() {
			assert.equal(obj.trigger('testEvent', 1, 2, 3), obj);
		});

		it('should call registered callbacks with passed arguments', function(done) {

			obj.on('testEvent', function(a, b, c) {
				assert.equal(1, a);
				assert.equal("2", b);
				assert.deepEqual({ value: 3 }, c);
				done();
			});
			obj.trigger('testEvent', 1, "2", { value: 3 });

		});

	});

	describe('#off(eventName, callback)', function() {
		it('should return itself', function() {

			// Disable event
			assert.equal(obj, obj.off('testEvent', function() { }));

		});
		it('should not call a removed callback', function() {

			// Enable event now
			var value = true;
			var callback = function() {
				value = false;
			};
			obj.on('testEvent2', callback);

			// Disable it
			obj.off('testEvent2', callback);

			// Trigger it
			obj.trigger('testEvent2', 'hoi');

			// Not false?
			assert.equal(true, value, 'The callback was called even though it waas removed!');

		});
	});



});