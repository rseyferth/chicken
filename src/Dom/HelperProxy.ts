export default class HelperProxy
{

    name : string;
    callback : Function;
    context? : any;
    arguments : any[] = [];

	constructor(name : string, helperFunction : Function, context? : any) {

		this.name = name;
		this.callback = helperFunction;
		this.context = context;

	}

	setArguments(...args : any[]) {
		this.arguments = args;
	}

	invoke() {

		// Do it
		return this.callback.apply(this.context, this.arguments);

	}

}
