import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Problem - ONly first generic type is getting infered, all other are unknown. you can hover
 * over function call and return value of function
 * 
 * 
 * 
 * second and third generic arguments are not getting infered because
 * because all of the type arguments are actually attached to the first function
 * here and what that means is that U basically can't be inferred from anything
 * nor can V be inferred from anything because type arguments are always attached
 * to a function call.
 * 
 * 

 */

export const curryFunction =
  <T, U, V>(t: T) =>
  (u: U) =>
  (v: V) => {
    return {
      t,
      u,
      v,
    };
  };

/**
 *  I can actually like make this work by passing in genrics types manually
 * so what you end up with is T UV number number number and so if I try and
 * like put anything that isn't a number in here then it's going to yell at
 * me because I'm filling up each of these slots on the first function, but this is the issue.
 */

const result = curryFunction<number, number, string>(1)(2)("3");

it("Should return an object which matches the types of each input", () => {
  const result = curryFunction(1)(2)(3);

  expect(result).toEqual({
    t: 1,
    u: 2,
    v: 3,
  });

  type test = [
    Expect<Equal<typeof result, { t: number; u: number; v: number }>>
  ];
});
