import Action from "./Action";
import Application from "../Application";
export interface ControllerConstructor {
    new <T extends Controller>(action: Action, application?: Application): T;
}
export default class Controller {
    static registry: Map<string, ControllerConstructor>;
    action: Action;
    application: Application;
    /**
     * @class Routing.Controller
     *
     * @constructor
     * @param {Routing.Action} action  The routing action that leads to the creation of this controller
     */
    constructor(action: Action, application?: Application);
    /**
     * Request parameters
     *
     * @property parameters
     * @type {Map}
     */
    readonly parameters: Map<string, string>;
    /**
     * The ViewContainer into which this controller action will render
     *
     * @property viewContainer
     * @type {Dom.ViewContainer}
     */
    readonly viewContainer: import("../../../../../../../Users/ruben/Projects/Javascript Projects/ts-chicken/src/Dom/ViewContainer").default | undefined;
    /**
     * @property request
     * @type {Routing.Request}
     */
    readonly request: import("../../../../../../../Users/ruben/Projects/Javascript Projects/ts-chicken/src/Routing/Request").default;
    /**
     * @property route
     * @type {Routing.Route}
     */
    readonly route: import("../../../../../../../Users/ruben/Projects/Javascript Projects/ts-chicken/src/Routing/Route").default | undefined;
}
