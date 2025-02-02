import { Equal, Expect } from "@total-typescript/helpers";
import { unknown } from "zod";

/**
 * @Reason for any type - see snippet at end of code.
 * Here we are returning different tupples in different branches of function, so ts tries to come up
 * with a return type,here in this case, that return type is any[]. see code snippet at end of code
 * to see why it is any.
 *
 *  but we can define our own return type and then all values should be
 * assignable to that type.then that type will be assumed as return type of function.
 * rare usecases where we should give type to function return types.
 *
 * this solution works but it is bit cumbersome to type types manually, to avoid this see second solution
 *
 *
 */
const fetchData = async (): Promise<[Error | undefined, any?]> => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data = await result.json();

  return [undefined, data];
};

const example = async () => {
  /**
   * how destructuring array works with tupples.
   *
   * data has type - any | undefined which resolves to any
   */
  const [error, data] = await fetchData();
  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>,
  ];
};

/**
 * @CodeSnippets 1
 *
 * because one meber is unknown, type of a should be number | unknown , which resolves to unknown
 */

const b: unknown;

const a = [1, b]; // array of unknown

/**
 * @CodeSnippets 2
 *
 * Using context established above, return type of else is - Promise<(undefined | unknown)[]> which
 *  resolves to Promise<unknown[]>. return type of if block - Promise<Error[]>, again union of 2
 *  results in Promise<unknown[]>
 *
 *
 */
const randomNumber = async () => {
  const num = Math.random();
  if (num > 0.5) return [new Error("Abc")];
  else {
    const a = await fetch("/abc");
    const b = await a.json();
    /**
     * so here type of b is any,ts has no idea that you want to have 2 types so js assign this expression any[].
     * it then combines it with return type in if branch,as result return tye is any.
     *
     * if we remove any return type then return type of function changes
     */
    return [undefined, b];
  }
};
