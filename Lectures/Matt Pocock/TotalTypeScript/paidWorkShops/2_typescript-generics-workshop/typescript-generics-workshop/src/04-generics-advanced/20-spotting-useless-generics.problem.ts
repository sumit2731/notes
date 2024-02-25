import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * we can remove one of the generic parameters here. It seems a little bit clumsy the way that we've
 * done it, and one of these generics is a little bit useless and we can condense them down.
 */
const returnBothOfWhatIPassIn = <T1, T2>(params: {
  a: T1;
  b: T2;
}): [T1, T2] => {
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
