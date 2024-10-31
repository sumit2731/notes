import { describe, expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";
/**
 * @see lecture
 *
 * Function definition is not exposed outside,If we use function overloads
 * Also all function overloads should be compatible with defintion. if there is
 * any case which is not covered by overload, it will throw error.mismatch it starts showing error in overlad declaration
 */
function youSayGoodbyeISayHello(greeting: "goodbye"): "hello";
function youSayGoodbyeISayHello(greeting: "hello"): "goodbye";
function youSayGoodbyeISayHello(
  greeting: "goodbye" | "hello"
): "goodbye" | "hello" {
  return greeting === "goodbye" ? "hello" : "goodbye";
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
