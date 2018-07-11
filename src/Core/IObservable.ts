export default interface IObservable {

    notificationsDisabled : boolean;

    
    get(key : any) : any;
    set(key : any, value : any, convertToObservables : boolean) : any;

    study(callback : Function) : any;
    neglect(callback : Function) : any;

    on(eventName : string, callback : Function) : any;
    off(eventName : string, callback : Function) : any;
    trigger(eventName : string, ...args : any[]) : any;


}

