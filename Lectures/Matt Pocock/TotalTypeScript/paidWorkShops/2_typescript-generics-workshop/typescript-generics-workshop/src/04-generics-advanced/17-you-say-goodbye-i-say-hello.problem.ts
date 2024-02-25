import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// function youSayGoodbyeISayHello(greeting: unknown) {
//   return greeting === "goodbye" ? "hello" : "goodbye";
// }

type returnHelper<T extends "hello" | "goodbye"> = T extends "hello"
  ? "goodbye"
  : "hello";
function youSayGoodbyeISayHello<T extends "hello" | "goodbye">(greeting: T) {
  return (greeting === "goodbye" ? "hello" : "goodbye") as returnHelper<T>;
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
