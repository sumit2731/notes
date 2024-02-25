import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 *
 * It's actually debatable which one is better here. This one here(solution) is maybe actually a little less
 * cleaner. You're having to do a little bit less mapping here. Whereas this one, it's like there's a bit more constraint going on. You're having to index into it both times.
 *
 * I want to put into your mind the idea that you should be on the hunt for useless generics in your projects,
 * in your functions.
 *
 * This is basically dealer's choice. It's up to you which one you use. Experience has taught me that you
 * should try to reduce the number of type arguments that you possibly can.
 *
 * In general, fewer, it's going to be easier to refactor. You're less likely to end up with useless
 * ones cluttering up your functions.This is something you should be aware of whenever you're writing generic
 * functions, is that you sometimes end up with a little bit of cruft, a little bit of crap that you need to
 * get rid of.
 */
const returnBothOfWhatIPassIn = <
  TParams extends {
    a: unknown;
    b: unknown;
  }
>(
  params: TParams
): [TParams["a"], TParams["b"]] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual(["a", 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});
