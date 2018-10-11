class FakeHistory
{



	constructor(location = null) {
		this.location = location || {
			action: 'POP',
			hash: '',
			key: 'abc',
			pathname: '/',
			search: ''
		};
	}

	listen(/*callback*/) {

	}
	getCurrentLocation() {
		return this.location;
	}


}

export default FakeHistory;