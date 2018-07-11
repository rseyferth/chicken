/// <reference types="jquery" />
import ApiCall from "./ApiCall";
export default class ApiError {
    apiCall: ApiCall;
    xhrError: JQueryXHR;
    constructor(apiCall: ApiCall, xhrError: JQueryXHR);
    getStatusCode(): number;
    getMessage(): any;
    getFormErrors(): any;
    getStatus(): number;
}
