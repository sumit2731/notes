import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";


const returnBothOfWhatIPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

it("Should return an object of the arguments you pass", () => {
  /**
   * You would expect this actually to be a and 1 here. When you start 
   *  using multiple generics and multiple arguments, TypeScript gets
   *  more cautious about the way that it infers this stuff.(real reason 
   *    for this is that we are returning a object)
   * 
   * 
   * If we want it to really infer deeply what's being passed, then we 
   *  pass in a stronger constraint here. We would say A extends a string.
   *  Now it's going to give us a tighter literal sense there.
   */
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({
    a: "a",
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
