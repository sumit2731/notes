import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type t1 = ReturnType<typeof getUser>;
type t12 = Promise<{
  id: string;
  name: string;
  email: string;
}>;
type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];

/**
 * Things learnt -
 *  utility type helper - Awaited. gives type returned by Promise
 */

/**
 * Type for Awaited
 */

//prettier-ignore
type Awaited3<T> = T extends null | undefined 
  ? T // if T is null or undefined, then return T itself
  : T extends object & {then (onFulfilled: infer F, ...args: any[]): any} // check if T has .then method, if yes then extract the type of first parameter to it
    ? F extends (val: infer V,...args: any[] ) => any // if T has .then method, then get the type of first parameter passed to it
      ? V // return type of first parameter of then
      : never // if onFullfilled is not a callback
    : T // if T is not object or does not have .then method, this is important as we are calling Awaited with Awaited<V>, so this step will return correct value
