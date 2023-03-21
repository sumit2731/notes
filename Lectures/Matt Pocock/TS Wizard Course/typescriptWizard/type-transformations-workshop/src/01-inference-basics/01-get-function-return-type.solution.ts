import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];

/**
 * Concepts learned -
 *
 * 1)typeof allows us to extract types form tun time code
 * 2)ts utility type - ReturnType. it allows us to extract retur type from function type.
 */
