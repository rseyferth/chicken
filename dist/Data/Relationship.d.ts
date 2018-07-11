import Model from './Model';
import ModelDefinition from './ModelDefinition';
export default class Relationship {
    name: string;
    type?: string;
    localModel: string;
    localKey?: string;
    remoteModel?: string;
    remoteKey?: string;
    morphModelKey?: string;
    morphModelValuePrefix?: string;
    pivotModel?: string;
    pivotAttributes: string[];
    inverseRelationshipName?: string;
    touchLocalOnUpdate: boolean;
    sortCallback?: Function;
    constructor(name: string, localModel: string);
    hasMany(remoteModel: string, localKey?: string, remoteKey?: string): Relationship;
    belongsTo(remoteModel: string, localKey?: string, remoteKey?: string): Relationship;
    hasOne(remoteModel: string, localKey?: string, remoteKey?: string): Relationship;
    belongsToMany(remoteModel: string, localKey?: string, remoteKey?: string, pivotModel?: string): Relationship;
    belongsToMorph(morphModelKey: string, localKey: string, remoteKey?: string, morphModelValuePrefix?: string): Relationship;
    hasManyMorph(remoteModel: string, morphModelKey: string, localKey?: string, remoteKey?: string, morphModelValuePrefix?: string): Relationship;
    getMorphModelValue(remoteModel: Model): string;
    usesCollection(): boolean;
    setLocalKey(value: string): Relationship;
    setRemoteKey(value: string): Relationship;
    /**
     * set a flag to update the dirty attribute of local model
     * @return {Relationship} Chainable
     */
    touchLocal(value?: boolean): Relationship;
    /**
     * Add local key as attribute to the modelDefinition to ensure
     * that it is being serialized in the apiCall.
     * Attributes with `Id` will be cast as an integer,
     * Attributes with 'Key' will be cast as a string.
     * For other keys manually define them in the model.
     *
     * @param {ModelDefinition} modelDefinition the definition to at the attribute to
     * @return {Relationship} chainable
     */
    addLocalKeyToModelDefinitionAttributes(modelDefinition: ModelDefinition): Relationship;
    /**
     * Add sorting method to the relationship. The given callback will be
     * called when the relationship Collection is instantiated from the API.
     *
     * @param  {Function} callback
     * @chainable
     */
    sorted(callback: Function): Relationship;
    inverse(relationshipName: string): Relationship;
    isStoredOnLocalModel(): boolean;
    isStoredOnRemoteModel(): boolean;
    getInitValue(): any;
    /**
     * Add one or more attributes as pivot attributes
     *
     * @method withPivot
     * @param  {...string} attributes  One or more attribute names
     * @chainable
     */
    withPivot(...attributes: string[]): Relationship;
    isPivot(): boolean;
    static HasMany: string;
    static HasOne: string;
    static BelongsTo: string;
    static HasManyThrough: string;
    static BelongsToMany: string;
    static BelongsToMorph: string;
    static HasManyMorph: string;
}
