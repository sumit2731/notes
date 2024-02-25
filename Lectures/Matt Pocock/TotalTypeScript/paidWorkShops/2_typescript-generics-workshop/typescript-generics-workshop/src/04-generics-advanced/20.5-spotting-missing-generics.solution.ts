import { Equal, Expect } from "../helpers/type-utils";

/**
 * Reason for error is typeof key is Union of all properties, return type is TObj[key], so return type is Union of object values
 * instead of giving union type to key argument, we need to give it exact literal type. This can be done by using
 *  a another generic argument.
 *
 * The lesson here is to make sure that if you're not getting the inference you want, make sure that you haven't got any missing generics.
 * You need to make sure that the right things are being inferred at the right times and that you've got the thing that you want to infer there
 */
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  return obj[key];
};

const obj = {
  a: 1,
  b: "some-string",
  c: true,
};

const numberResult = getValue(obj, "a");
const stringResult = getValue(obj, "b");
const booleanResult = getValue(obj, "c");

type tests = [
  Expect<Equal<typeof numberResult, number>>,
  Expect<Equal<typeof stringResult, string>>,
  Expect<Equal<typeof booleanResult, boolean>>
];

export {};
