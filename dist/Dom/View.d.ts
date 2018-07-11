/// <reference types="handlebars" />
/// <reference types="jquery" />
import { Dictionary } from 'underscore';
import Observable from '../Core/Observable';
import Component from './Component';
import Binding from './Binding';
import Renderer from './Renderer';
import ApiCall from '../Api/ApiCall';
import Obj from '../Core/Obj';
/**
 * @module Dom
 */
export default class View extends Observable {
    dataPromises: Dictionary<Promise<any>>;
    dataExpectations: Dictionary<any>;
    loadPromises: Promise<any>[];
    templateString?: string;
    source: string | false;
    template?: HandlebarsTemplates;
    templateUrl?: string;
    translationKeyPrefix?: string;
    tkp?: string;
    actions: Dictionary<Function>;
    helpers: Dictionary<Function>;
    components: Dictionary<Component>;
    renderer: Renderer;
    renderResult?: any;
    documentFragment?: DocumentFragment;
    $element?: JQuery;
    apiCalls: ApiCall[];
    hooks: Dictionary<Function[]>;
    isActive: boolean;
    bindings: Set<Binding>;
    revalidateTimeout?: any;
    constructor(source: string | false, initCallback?: Function, renderer?: Renderer);
    beforeRender(callback: any): this;
    beforeLeave(callback: any): this;
    loadTemplate(): Promise<any>;
    /**
     * To add data to the view, you can use the **with** method. The simplest way is to
     * call it using a **key** and a **value**:
     *
     * 	Chicken.view('page').with('title', 'Page title')
     *
     * You can also add a promise-returning method, such as:
     *
     * 	Chicken.view('product.index')
     * 		.with('products', Chicken.api('/products'));
     *
     * The view will then wait for the Api call to finish, before showing, so that you
     * can use the `products` collection your view.
     *
     * The same goes for a single model:
     *
     * 	Chicken.view('product.show')
     * 		.with('product', Chicken.api('/product/' + this.parameters.get('id')));
     *
     * When you have multiple data variables you want to pass to the view, you
     * can also use object notation:
     *
     * 	Chicken.view('product.index')
     * 		.with({
     * 			products: Chicken.api('/products'),
     * 			categories: Chicken.api('/categories')
     * 		});
     *
     *
     *
     * @method with
     * @param  {...mixed} args   This method can be called in two ways. See documentation
     * @chainable
     */
    with(...args: any[]): this;
    /**
     * Tell the View to expect given data to present in order to render properly. When this data
     * is not present, the View will throw an error.
     *
     * @method expect
     * @param  {string}  key          The data key that is expected in order for the View to render properly
     * @param  {Number}  minimumCount (Default = 1) The minimum number of records we expect
     * @param  {Number}  maximumCount (Default = false) The maximum number of recorders we expected
     * @chainable
     */
    expect(key: string, minimumCount?: number, maximumCount?: boolean): View;
    action(key: string, callback: Function): View;
    helper(key: string, callback: Function): View;
    getHelper(key: any): Function;
    translationPrefix(key?: string): View;
    sendAction(name: string, ...args: any[]): void;
    /**
     * Render the view!
     *
     * @method render
     * @return {Promise}  The 'render' promise is returned. The 'added' promise will be called
     *                    when the view is added to the DOM.
     **/
    render(): Promise<any>;
    /**
     * Render the view synchronously. Only use this when you know all
     * the data is already loaded!
     *
     * @method renderSync
     * @chainable
     */
    renderSync(): View;
    getTemplate(): any;
    /**
     * Have the rendered view be revalidated when it's convenient.
     *
     * @method scheduleRevalidate
     * @chainable
     */
    scheduleRevalidate(): this;
    /**
     * Revalidate the rendered view. Revalidation means the updating of
     * 'dirty' elements (morphs). The dirtying is done by the Bindings, set up
     * by the Renderer.
     *
     * If your binding is valid, and components work as the should, you shouldn't
     * need to call this method. If you do though, it is better to call
     * `scheduleRevalidate` instead, to prevent undue calls.
     *
     * @method revalidate
     * @chainable
     */
    revalidate(): this;
    /**
     * Add the view to the ViewContainer, replacing previous contents
     * and making sure the ViewContainer knows it's gotten the view.
     *
     * @method addToContainer
     * @param {Dom.ViewContainer} viewContainer
     */
    addToContainer(viewContainer: any): void;
    /**
     * Handle the leaving of the page this View is on, e.g. destroying
     * components.
     *
     * @method leave
     * @return {Promise}
     */
    leave(): Promise<{}>;
    addBinding(binding: any): this;
    /**
     * The TemplateCache is used to cache templates by their name. When you are
     * building your application for production, you can also use this to bundle
     * the templates.
     *
     * @property TemplateCache
     * @static
     * @type {Map}
     */
    static TemplateCache: Map<string, string>;
    /**
     * The number of milliseconds to wait before revalidating your views after
     * a change in the data has occured.
     *
     * This value can be very low, as it is mostly used to bundle changes together
     * that occur semi-simultaneously.
     *
     * @property RevalidationDelay
     * @static
     * @type {Number}
     */
    static RevalidationDelay: number;
    /**
     * When this is true, a translation-prefix will automatically be set
     * upon creation of this View, with the same value as the given source.
     *
     * @property AutoTranslationPrefix
     * @static
     * @type {Boolean}
     */
    static AutoTranslationPrefix: boolean;
    static any: Obj;
}
