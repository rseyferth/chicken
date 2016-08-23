/* global describe, it */

import { assert } from 'chai';
import Obj from '~/Core/Obj';

var obj = new Obj();

describe('Core.Obj', function() {
	
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
				assert.equal('2', b);
				assert.deepEqual({ value: 3 }, c);
				done();
			});
			obj.trigger('testEvent', 1, '2', { value: 3 });

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


	describe('#promise(key, successCallback, failureCallback) and #when(...keys, callback)', () => {

		it('should allow a promise to be made using a key', (done) => {

			obj.promise('ready', (resolve) => {
				resolve('We are ready!');
			});

			obj.when('ready', () => {				
				done();
			});

		});

		it('should allow a #when call before a #promise and still call the callback', (done) => {

			obj.when('lazy', () => {
				done();
			});

			obj.promise('lazy', (resolve) => {
				resolve('I am not lazy.');
			});

		});

		it('should allow multiple promises to be resolved at once', (done) => {

			obj.when('crazy', 'chilly', () => {
				done();
			});

			obj.promise('crazy', (resolve) => {
				resolve('I am crazy');
			});
			obj.promise('chilly', (resolve) => {
				resolve('I am chilly');
			});

		});

		it('should call second callback when a promise fails', (done) => {

			obj.when('impossible', 'possible', () => {
				// This should not be reached.
			}, () => {
				done();
			});

			obj.promise('possible', (resolve) => {
				resolve('No problem.');
			});

			obj.promise('impossible', (resolve, reject) => {
				reject('It ain\'t happening');
			});

		});

	});



});