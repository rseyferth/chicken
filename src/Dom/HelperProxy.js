class HelperProxy
{

	constructor(name, helperFunction, context) {

		this.name = name;
		this.callback = helperFunction;
		this.context = context;

	}

	setArguments(...args) {
		this.arguments = args;
	}

	invoke() {

		// Do it
		return this.callback.apply(this.context, this.arguments);

	}

}

export default HelperProxy;