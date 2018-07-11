import _, { Dictionary } from 'underscore';
import Renderer from './Renderer';
/**
 * @module Dom
 */
export default class Helpers {
    renderer: Renderer;
    constructor(renderer: Renderer);
    action(params: any[], attributeHash: Dictionary<any>, blocks: any): void;
    link(params: any[], attributeHash: Dictionary<any>, blocks: any): void;
    linkTo(params: any[], attributeHash: Dictionary<any>, block: any): void;
    touchLink(params: any[], attributeHash: Dictionary<any>, block: any): void;
    touchLinkTo(params: any[], attributeHash: Dictionary<any>, block: any): void;
    /**
     * @method each
     */
    each(params: any[], attributeHash: Dictionary<any>, blocks: any, morph: any): void;
    /**
     * @method reverseEach
     */
    reverseEach(params: any[], attributeHash: Dictionary<any>, blocks: any, morph: any): void;
    repeat(params: any[], attributeHash: Dictionary<any>, blocks: any, morph: any): void;
    /**
     * @method if
     */
    if(params: any[], attributeHash: Dictionary<any>, blocks: any): any;
    ifOne(params: any[], attributeHash: Dictionary<any>, blocks: any): any;
    ifAll(params: any[], attributeHash: Dictionary<any>, blocks: any): any;
    /**
     * @method unless
     */
    unless(params: any[], attributeHash: Dictionary<any>, blocks: any): any;
    _ifUnless(params: any[], blocks: any, show: boolean): any;
    either(params: any[]): boolean;
    neither(params: any[]): boolean;
    both(params: any[]): boolean;
    concat(params: any[], attributeHash: Dictionary<any>): string;
    object(params: any[], attributeHash: Dictionary<any>): _.Dictionary<any>;
    get(params: any[]): any;
    firstIn(params: any[]): any;
    equal(params: any[]): boolean;
    notEqual(params: any[]): boolean;
    not(params: any[]): boolean;
    isNull(params: any[]): boolean;
    isSet(params: any[]): boolean;
    gt(params: any[]): boolean;
    gte(params: any[]): boolean;
    lt(params: any[]): boolean;
    lte(params: any[]): boolean;
    isObject(params: any[]): boolean;
    valueOr(params: any[]): any;
    fallback(params: any[]): any;
    method(params: any[]): any;
    isDirty(params: any[]): boolean;
    attributesFrom(params: any[], attributeHash: Dictionary<any>, blocks: any, morph: any): void;
    isNumeric(params: any[]): boolean;
    camelize(params: any[]): string;
    string(params: any[]): any;
    underscore(params: any[]): any;
    count(params: any[]): any;
    contains(params: any[]): boolean;
    moment(params: any[]): any;
    momentFormat(params: any[]): any;
    momentIsAfter(params: any[]): boolean;
    fileSize(params: any[]): any;
    add(params: any[]): any;
    subtract(params: any[]): any;
    numberFormat(params: any[]): any;
    round(params: any[]): number;
    max(params: any[]): any;
    min(params: any[]): any;
    multiply(params: any[]): number;
    log(params: any): void;
    'query-params'(params: any[], attributeHash: Dictionary<any>): string;
    t(params: any[], attributeHash: Dictionary<any>): any;
    tText(params: any[], attributeHash: Dictionary<any>): string;
    _getValue(param: any): any;
    _getValues(params: any[]): any[];
    _getHashValues(attributeHash: Dictionary<any>): _.Dictionary<any>;
    static User: Dictionary<Function>;
}
