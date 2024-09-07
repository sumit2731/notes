import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

type helperH1<K extends keyof any> = {
  [Prop in K]: string;
};

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */

type MutuallyExclusive<T> = {
  [Prop in keyof T]: Record<Prop, string>;
}[keyof T];

type t1 = MutuallyExclusive<Attributes>;

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
