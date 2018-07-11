import Request from "./Request";
export default class RoutingError {
    code: number;
    message?: string;
    request?: Request;
    constructor(code: number, message?: string, request?: Request);
}
