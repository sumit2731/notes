import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type PromiseFunc<TResult> = () => Promise<TResult>;
/**
 * In order to have return type of function,we need to have return type of func
 * so we provide that via generic, so once we have that, everything works fine.
 *
 * see that generic type that you provide to function can be passed to another generic
 * type helper and still type is guessed right from it
 *
 * So you can combine generic types and generic functions to make these really clever patterns
 * and to basically capture a lot of the complexity
 */
const safeFunction =
  <TResult>(func: PromiseFunc<TResult>) =>
  async () => {
    try {
      const result = await func();
      return result;
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
      throw e;
    }
  };

it("should return an error if the function throws", async () => {
  /**
   * here generic is interpreted a string, because of return type of function
   */
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
  const func = safeFunction(() => {
    return Promise.resolve(`Hello!`);
  });

  type test1 = Expect<Equal<typeof func, () => Promise<string | Error>>>;

  const result = await func();

  type test2 = Expect<Equal<typeof result, string | Error>>;

  expect(result).toEqual("Hello!");
});
