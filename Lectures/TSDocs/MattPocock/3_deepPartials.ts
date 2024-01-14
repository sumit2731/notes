/**
 * Deep Partial for Object
 */

type DeepPartialObject2<Type> = {
  [Prop in keyof Type]?: Type[Prop] extends object
    ? DeepPartialObject<Type[Prop]>
    : Type[Prop];
};

/**
 * Deep Partial for All Types
 */

export type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
  [Prop in keyof Thing]?: Thing[Prop] extends object
    ? DeepPartialObject<Thing[Prop]>
    : Thing[Prop];
};
