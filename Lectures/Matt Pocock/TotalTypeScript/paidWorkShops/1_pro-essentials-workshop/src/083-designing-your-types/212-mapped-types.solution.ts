import { Equal, Expect } from "@total-typescript/helpers";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}
/**
 * This is mapped types. syntax is very similar to index types
 * mapped types means we map over union of something that's assignable to string
 *
 * transforming objects into other shapes is really great way to derive types from other types.
 * we can single source of truth (object type) and transform it to another types
 *
 */
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
