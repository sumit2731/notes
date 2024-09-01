import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];

/* 
Exlanation of Awaited Type
*/


type Awaited2<T> =
  T extends null | undefined
  ? 
    T //If T is null or undefined return it as it is
  : T extends object & {then:(onFulFilled : infer F, ...args: infer _) => any} // check if T is of promise Type
    ? F extends (value: infer V) => any // get the value that will be resolved from the promise
      ? Awaited2<T> // this value can again be of promise so call Awaited2 Again
      : never
    : T // If T is not of promise type return T as it is