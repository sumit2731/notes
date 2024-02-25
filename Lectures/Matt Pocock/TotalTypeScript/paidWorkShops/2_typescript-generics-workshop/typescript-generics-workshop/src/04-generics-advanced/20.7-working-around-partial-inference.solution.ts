import { Equal, Expect } from "../helpers/type-utils";

/**
 * See Lecture
 * We splitted the 2 generic arguments to 2 different function calls. like closure inner function can
 * access the generic types of outer function
 *
 * What happens if we don't have this? Source is going to get inferred as unknown. For people
 * using this API, they're going to go, "Why would this happen? Why is this going to be unknown?"
 *
 * What we can do is, because this TSource can be anything -- it can be basically anything we
 * want -- we can give it a default value. now if no generic is passed, we get this message while
 * we hover over function call.
 *
 * We have to split out the type arguments over two separate function calls because we're passing
 * one and then inferring the other.If TypeScript supported partial inference, then maybe I can
 * come back and delete this entire exercise or rather just show you that it works because yeah.
 * I'm not going to say complain to the TypeScript team about it because I'm sure there's a reason
 * why they haven't added it. My God, it would be very, very useful for these types of cases where
 * you want to both pass and infer type arguments.
 */
export const makeSelectors =
  <TSource = "makeSelectors expects to be passed a type argument">() =>
  <TSelectors extends Record<string, (source: TSource) => any>>(
    selectors: TSelectors
  ) => {
    return selectors;
  };

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

const selectors = makeSelectors<Source>()({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});

/**
 * Hover over function calls to see the values of generics
 */
const fun1 = makeSelectors<Source>();
const selectors2 = fun1({
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
