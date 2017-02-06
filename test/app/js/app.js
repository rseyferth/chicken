let app = Chicken.application($('#application'), {

	baseUrl: '/'

}).routes(function() {

	this.route('/', () => { return 'Chicken Test Application' });

}).start();