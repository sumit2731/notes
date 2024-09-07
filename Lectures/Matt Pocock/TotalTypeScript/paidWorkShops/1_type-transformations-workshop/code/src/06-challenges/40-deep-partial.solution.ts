import { Equal, Expect } from "../helpers/type-utils";

/**
 * This solution works fine but one edge case it allows us to pass undefined values in case of arrays
 */
// type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

/**
 * My Solution - this is also right but bit more descriptive
 */

type DeepPartial2<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : DeepPartial<T[P]>;
    }
  : T;

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : { [K in keyof T]?: DeepPartial<T[K]> };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

const Result: DeepPartial<MyType> = {
  c: {
    e: {
      g: [undefined, undefined, { h: "abc" }],
    },
  },
};

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
