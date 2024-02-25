import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * The way to fix this is actually move them so that they're on each function call here so
 *  instead of this - curryFunction <number, number, number>(1)(2)(3)
 *  we have this - curryFunction <number>(1)<number>(2)<number>(3)
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

  /**
   *  * so this is a critical idea when it comes to like generic inference is that each function can actually
   *  capture its own generic arguments.sometimes you get really bad inference because your generics are at
   *  wrong slots
   *
   * hover over these types to see type being infered
   */
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
