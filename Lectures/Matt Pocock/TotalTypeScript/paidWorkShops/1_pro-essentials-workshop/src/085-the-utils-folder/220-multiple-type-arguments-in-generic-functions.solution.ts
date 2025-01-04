import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

/**
 * this clause means that value is of type array
 *
 * ...args: TArgs, means that argument number varies
 */
type PromiseFunc<TArgs extends any[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;
/**
 * All function arguments are tupples, so we want to infer tupple only.
 * Here generic type should be tupple. that way we will get exact count of parameters also.,
 *
 * if we do this - <TArgs, TResult>(func: PromiseFunc<TArgs[], TResult>) =>
 * In fist exercise type will be never[] and in second case it will be string[], that means we can pass
 * as many arguments as possible.
 *
 * but with current solution generic is infered as tupple. so we get current typings.
 */
const safeFunction =
  <TArgs extends any[], TResult>(func: PromiseFunc<TArgs, TResult>) =>
  // <TArgs, TResult>(func: PromiseFunc<TArgs[], TResult>) =>
  async (...args: TArgs) => {
    try {
      const result = await func(...args);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };

it("should return an error if the function throws", async () => {
  const func = safeFunction(async () => {
    if (Math.random() > 0.5) {
      throw new Error("Something went wrong");
    }
    return 123;
  });
  type test1 = Expect<Equal<typeof func, () => Promise<Error | number>>>;

  const result = await func();

  type test2 = Expect<Equal<typeof result, Error | number>>;
});

it("should return the result if the function succeeds", async () => {
  const func = safeFunction((name: string) => {
    return Promise.resolve(`hello ${name}`);
  });

  type test1 = Expect<
    Equal<typeof func, (name: string) => Promise<Error | string>>
  >;

  const result = await func("world");

  type test2 = Expect<Equal<typeof result, string | Error>>;

  expect(result).toEqual("hello world");
});
