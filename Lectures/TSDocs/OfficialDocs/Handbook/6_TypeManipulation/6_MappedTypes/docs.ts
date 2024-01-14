/* 
Mapped types build on the syntax for index signatures.
A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to
    iterate through keys to create a type:

*/

type OptionsFlags<Type> = {
  [P in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

// **************MappingModifiers *************************************************************

/* 
There are two additional modifiers which can be applied during mapping: readonly and ? which affect 
    mutability and optionality respectively.

    You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

*/

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

/*
Key Remapping via as 
In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:
*/

type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties];
};

/**
 *You can leverage features like template literal types to create new property names from prior ones.
'string &' ensures that value is string only, non string values are ot iterated upon
 */

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

type Person = {
  id: number;
  name: string;
};

type PersonGetter = Getters<Person>;

/**
 * FilterOut keys by producing never type
 */

//way1

type ExcludeKind<Type> = {
  [Prop in keyof Type as Exclude<Prop, "kind">]: Type[Prop];
};
type Exclude2<Type, ExcludedTypes> = Type extends ExcludedTypes ? Type : never;

//way2
type ExcludeKind2<Type> = {
  [Prop in keyof Type as Prop extends "kind" ? never : Prop]: Type[Prop];
};

//You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type newType<UnionType extends { kind: string }> = {
  [Type in UnionType as Type["kind"]]: (event: Type) => void;
};

type Config = newType<SquareEvent | CircleEvent>;

/**
 * Further Exoloration
 *
 * Mapped types work well with other features in this type manipulation section, for example here is a
 * mapped type using a conditional type which returns either a true or false depending on whether an
 * object has the property pii set to the literal true:
 */

type ExtractPII<Type> = {
  [Prop in keyof Type]: Type[Prop] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
