import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}
/**
 * This is how we extract out values from object i.e return type in union where each type
 * of union is value type of Object
 */

type valuesOnly = Values[keyof Values]

/**
 * t's hard to overstate how useful this pattern is. It looks completely mad when you first see 
 * it, but my God, you can actually use this in lots of different ways to map over unions, transform
 * them into different unions, transform them into objects.
 */
type ValuesAsUnionOfTuples = {
  [V in keyof Values]: [V, Values[V]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >,
];
