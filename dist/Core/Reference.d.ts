import Observable from './Observable';
export default class Reference {
    observable: Observable;
    path: string;
    constructor(observable: Observable, path: string);
    getValue(): any;
    setValue(value: any): this;
    watch(callback: Function): void;
}
