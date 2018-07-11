import IObservable from '../Core/IObservable';
import Renderer from './Renderer';
import Morph from 'htmlbars/dist/cjs/htmlbars-runtime/morph';
import Reference from '../Core/Reference';
import { Dictionary } from '../../node_modules/@types/lodash';
export default class Binding {
    renderer: Renderer;
    observable: IObservable;
    path?: string;
    reference?: Reference;
    morphs: Set<Morph>;
    changeCallback: Function;
    /**
     * @class Dom.Binding
     *
     * @constructor
     * @param  {Dom.Renderer} 							renderer
     * @param  {Core.Observable|Core.ObservableArray} 	observable
     * @param  {string} 								path
     */
    constructor(renderer: Renderer, observable: IObservable, path?: string);
    /**
     * Get the current value of the data object
     *
     * @method getValue
     * @return {mixed}
     */
    getValue(): any;
    setValue(value: any, morph?: Morph): any;
    getReference(): Reference;
    destroy(): void;
    /**
     * Add a morph object to the list of morphs, so that it will
     * be updated when the data changes. And in cases when applicable,
     * vice-versa.
     *
     * @method addMorph
     * @param {HTMLBarsMorph} morph
     * @param {object} scope
     */
    addMorph(morph: any, scope: any): void;
    static TwoWay: Dictionary<any>;
}
