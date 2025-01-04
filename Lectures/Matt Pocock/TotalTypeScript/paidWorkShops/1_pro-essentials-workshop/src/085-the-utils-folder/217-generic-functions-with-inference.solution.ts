import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

/**
 * here type arguments is linked with function argument.
 * we can also provide type argument also, then it is going to validate the relation between these
 *  two. you cannot do this -
 *    uniqueArray<number>([1, 1, 2, true]);
 *
 * without this linking type arguments defaults to unknown
 *
 * here return type is also linked to type argument, so it solves our problem
 */
const uniqueArray = <T>(arr: T[]) => {
  return Array.from(new Set(arr));
};

it("returns an array of unique values", () => {
  const result = uniqueArray([1, 1, 2, 3, 4, 4, 5]);

  type test = Expect<Equal<typeof result, number[]>>;

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("should work on strings", () => {
  const result = uniqueArray(["a", "b", "b", "c", "c", "c"]);

  type test = Expect<Equal<typeof result, string[]>>;

  expect(result).toEqual(["a", "b", "c"]);
});
