export default class ModelAttribute {
    name: string;
    type: string;
    isPrimaryKey: boolean;
    isNullable: boolean;
    isUnique: boolean;
    includeInRequests: boolean;
    defaultValue?: any;
    size?: number;
    enumOptions?: string[];
    constructor(name: string, type: string);
    default(value: any): this;
    primary(isPrimaryKey?: boolean): this;
    unique(isUnique?: boolean): this;
    nullable(isNullable?: boolean): this;
    hidden(isHiddenFromRequests?: boolean): this;
    /**
     * Cast given (database) value for use in the application,
     * according to the type of this attribute
     *
     * @method cast
     * @param  {mixed} value
     * @return {mixed}
     */
    cast(value: any): any;
    /**
     * Cast given application value back for use in the database/api.
     *
     * @method uncast
     * @param  {mixed} value
     * @return {mixed}
     */
    uncast(value: any): any;
    getDefaultValue(): any;
    static Number: string;
    static Boolean: string;
    static Integer: string;
    static String: string;
    static Text: string;
    static Enum: string;
    static Date: string;
    static DateTime: string;
    static Time: string;
    static Array: string;
    static Object: string;
    static Translations: string;
    static Model: string;
}
