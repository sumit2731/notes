import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type Helper<U, O> = U extends O ? U : never;

// type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;
type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
