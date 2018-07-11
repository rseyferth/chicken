import Request from "./Request";

export default class RoutingError
{

    code : number;
    message? : string;
    request? : Request;

	constructor(code : number, message? : string, request? : Request) {
		this.code = code;
		this.message = message;
		this.request = request;
	}


}
