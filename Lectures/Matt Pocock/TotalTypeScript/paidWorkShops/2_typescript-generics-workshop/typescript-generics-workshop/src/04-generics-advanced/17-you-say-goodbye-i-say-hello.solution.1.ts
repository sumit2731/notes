import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 *
 * TypeScript isn't smart enough to match this runtime stuff(in body of function), all of these little
 * nodes here, the flow of this code, onto your type. It can't tell that those things match. You need to
 * do an as inside here.
 *
 * If you're using a conditional type in the return type of a function, you're probably going to
 *  need to use as somewhere.
 */
function youSayGoodbyeISayHello<TGreeting extends "hello" | "goodbye">(
  greeting: TGreeting
): TGreeting extends "hello" ? "goodbye" : "hello" {
  return (greeting === "goodbye" ? "hello" : "goodbye") as any;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
