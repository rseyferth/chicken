/// <reference types="jquery" />
import Auth from "./Auth";
/**
 * @module AuthError
 */
export default class AuthError {
    auth: Auth;
    xhrError: JQueryXHR;
    constructor(auth: Auth, xhrError: JQueryXHR);
    getMessage(): string;
}
