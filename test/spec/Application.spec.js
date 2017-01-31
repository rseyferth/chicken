
describe('Chicken.Application', () => {

	before(() => {

		

	});

	it('has loaded homepage', () => {

		casper.waitForSelector('#application', () => {
			'#correctElement'.should.be.inDOM
		});
	});

});