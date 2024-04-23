import { describe, expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";
/**
 * Important part of function overloads, which is when you have an overloaded function like this,
 * the implementation signature is not exposed outside of the function. This then becomes an
 * internal signature.
 *
 * so if you do not handle case when 'hello' is passed as parameter, you cannot pass hello to
 * function, even through actual implementation allows it.
 */
function youSayGoodbyeISayHello(greeting: "goodbye"): "hello";
function youSayGoodbyeISayHello(greeting: "hello"): "goodbye";
function youSayGoodbyeISayHello(
  greeting: "goodbye" | "hello"
): "goodbye" | "hello" {
  /**
   * Returning 'abc' does not give any error
   * but  if we return  number then overloaded signatures start giving error
   *
   * @MyNotes - Start
   * Think of it in this way - argument type or return type should overlap of Overload signatures
   *  should be subtype of function implementation , otherwise it will give error
   *
   * i.e argument type of overload signature should be assignable to function implementation type
   *
   * for ex, from below function implementation you can return a string literal and it will not give
   *  error , because implementation returns string which is super type for overload signatures
   *
   * @MyNotes - End
   *
   * You notice that function overloads are not a particularly type-safe form of TypeScript, or
   * rather, it means that the implementation part of the function overload is not really held
   * to a very high standard in terms of being super-duper type-safe.
   *
   * What I would probably recommend whenever you're doing a function overload is in the
   * implementation signature, type the return type and make sure manually that the return type
   * matches up to this other stuff here(overloaded signature). here also we do this to get proper
   * typesafety
   *
   * because it will make sure that overloaded signatures are compatible with implementation
   * signature
   */
  // return "abc";
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
