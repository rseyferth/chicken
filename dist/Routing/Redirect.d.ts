/// <reference types="underscore" />
import { Dictionary } from '../../node_modules/@types/underscore';
export default class Redirect {
    uri: string;
    flash: Dictionary<any>;
    constructor(uri: string);
    with(dataOrKey: any, value?: any): this;
    withError(message: string): this;
}
