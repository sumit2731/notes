import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * See lecture
 *
 * function overloads can also specify the different generics. based on what types of generics
 * you pass, relevent overload signature will be triggered
 */
function returnWhatIPassInExceptFor1(t: 1): 2;
/**
 *
 * @param t This overload will only kick in when argument is not equal to 1
 */
function returnWhatIPassInExceptFor1<T>(t: T): T;
function returnWhatIPassInExceptFor1(t: unknown): unknown {
  if (t === 1) {
    return 2;
  }
  return t;
}

it("Should return the type 2 when you pass in 1", () => {
  const result = returnWhatIPassInExceptFor1(1);
  /**
   * if we hover over this, there's no type argument being inferred here(i.e no generic)
   * What this means is we can use generics on different function overload signatures to
   * map different type argument setups.(relationship between arguments)
   *
   * how to use generics to pick a particular overload signature (see lecture)
   * you can differen generics signatures on different function overloads
   */
  type test1 = Expect<Equal<typeof result, 2>>;
});

it("Otherwise, should return what you pass in", () => {
  const a = returnWhatIPassInExceptFor1("a");
  const b = returnWhatIPassInExceptFor1("b");
  const c = returnWhatIPassInExceptFor1("c");

  type tests = [
    Expect<Equal<typeof a, "a">>,
    Expect<Equal<typeof b, "b">>,
    Expect<Equal<typeof c, "c">>
  ];
});
