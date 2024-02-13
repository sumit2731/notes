import { Equal, Expect } from "../helpers/type-utils";
/**
 * Now that we know that we can return things from a function, it makes sense that we could do if else 
 * logic within that function and return something different based on what gets passed in.
 */
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
