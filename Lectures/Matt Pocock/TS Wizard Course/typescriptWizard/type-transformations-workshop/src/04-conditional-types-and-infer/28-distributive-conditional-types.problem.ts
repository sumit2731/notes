import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

/**
 * First see second solution (also see video)
 * 
 * There is a really weird solution if you want to do it without a generic context, which is if you
 *  say, "Fruit extends infer T" -- this is a conditional type, and you're just inferring the thing
 *  that's in the Fruit -- now it will be treated as though now you can iterate over it because it's
 *  in a generic context.
 */

type AppleOrBanana = Fruit extends "apple" | "banana"
  ? "apple" | "banana"
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
