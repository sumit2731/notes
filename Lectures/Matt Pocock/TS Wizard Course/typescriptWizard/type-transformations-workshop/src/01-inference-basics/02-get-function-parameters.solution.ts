import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;
/**
 * This is how we can extract the type of single parameter from function
 */
type MakeQueryParametersSecondArgument = MakeQueryParameters[1];

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];

/**
 * Things learnt -
 *  Utility type Parameters - this returns a tuple
 * this is really useful for extracting things that you do not have any control of, like 3rd paty libraries.
 */
declare function f1(a: number, b: string): void;

type T3 = Parameters<typeof f1>;

let arr: T3 = [1, "a"];

declare function f12(obj: { a: number; b: string }): void;

type T32 = Parameters<typeof f12>;

let arr2: T32 = [{ a: 1, b: "a" }];
