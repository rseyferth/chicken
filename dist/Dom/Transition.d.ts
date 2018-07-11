/// <reference types="jquery" />
/// <reference types="underscore" />
import { Dictionary } from "../../node_modules/@types/underscore";
export default class Transition {
    $container: JQuery;
    $from: JQuery;
    $to: JQuery;
    name: string;
    viewWidth?: number;
    viewHeight?: number;
    duration?: number;
    constructor($container: JQuery, $fromContent: JQuery, $toContent: JQuery, name: string);
    play(): Promise<void>;
    _prepare(): void;
    _finish(): void;
}
export interface ITransition {
    play(transition: Transition, $from: JQuery, $to: JQuery): Promise<void>;
    newContentPosition: string;
}
export declare var transitions: Dictionary<ITransition>;
