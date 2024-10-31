import { Equal, Expect } from "../helpers/type-utils";

export const makeSelectors = <
  TSource,
  TSelectors extends Record<string, (source: TSource) => any>
>(
  selectors: TSelectors
) => {
  return selectors;
};

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * we're covering a really annoying aspect of how TypeScript infers type arguments when you pass
 * them to functions.
 *
 * We have a makeSelectors function, while calling the function we're passing it a type argument,
 * except that it looks like the second type argument, is not getting that inferred there(hover over makeSelectors call.
 *
 *  If we remove the source(first Generic argument) from function call, then we're going to get
 * second generic argument inferred but now first one is unknown
 *
 * it looks like as soon as we pass in one type argument, the second type argument doesn't get
 * inferred. This is correct. This is how TypeScript works, and it's so annoying.
 *
 * It's annoying because you can't pass in type arguments and infer the actual arguments in the same function call.
 * */

/**
 * We've got a problem here. We want to be able to infer the type
 * of the selectors object from what we passed in to makeSelectors.
 *
 * But we can't. As soon as we pass ONE type argument, inference
 * doesn't work on the other type arguments. We want to refactor this
 * so that we can infer the type of the selectors object.
 *
 * Desired API:
 *
 * makeSelectors<Source>()({ ...selectorsGoHere })
 */
const selectors = makeSelectors<Source>({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});

type tests = [
  Expect<Equal<(typeof selectors)["getFullName"], (source: Source) => string>>,
  Expect<
    Equal<(typeof selectors)["getFirstAndLastName"], (source: Source) => string>
  >,
  Expect<
    Equal<(typeof selectors)["getFirstNameLength"], (source: Source) => number>
  >
];
