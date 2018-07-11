export default class HelperProxy {
    name: string;
    callback: Function;
    context?: any;
    arguments: any[];
    constructor(name: string, helperFunction: Function, context?: any);
    setArguments(...args: any[]): void;
    invoke(): any;
}
