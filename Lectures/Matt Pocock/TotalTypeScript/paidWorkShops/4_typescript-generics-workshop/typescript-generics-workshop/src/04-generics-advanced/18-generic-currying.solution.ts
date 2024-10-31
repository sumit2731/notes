import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * type arguments are always attached to a function call.
 *
 * rest see lecture
 */

/**
 * @MyNotes
 * Here we saw that when pass generic to a function, we can access that type in inner function.
 * This works just like we can access variables in closures.
 *
 */
export const curryFunction =
  <T>(t: T) =>
  <U>(u: U) =>
  <V>(v: V) => {
    return {
      t,
      u,
      v,
    };
  };

it("Should return an object which matches the types of each input", () => {
  const result = curryFunction(1)(2)(3);

  const secondFunc = curryFunction(1);
  const thirdFunc = secondFunc(2);
  const result2 = thirdFunc(3);

  expect(result).toEqual({
    t: 1,
    u: 2,
    v: 3,
  });

  type test = [
    Expect<Equal<typeof result, { t: number; u: number; v: number }>>
  ];
});
