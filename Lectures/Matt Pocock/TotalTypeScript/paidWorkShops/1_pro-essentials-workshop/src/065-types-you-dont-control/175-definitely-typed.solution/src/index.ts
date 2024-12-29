import { Equal, Expect } from "@total-typescript/helpers";

/**
 * From package.json of this module we found the entry point of this package is lib/index.js.
 * Here we can see that there is no declaration file beside entry point.so we need to get
 * declaration file from some where. we install this package - @types/diff.this places
 * the declartion file in node_modules/@types/diff/index.d.ts.Typescript is smart enough to
 * know that if there's something in this at types folder here Then it can look at that and
 * see okay now I've found the declaration files for this
 *
 * Ts will look for types in this package or in node_modules/@types, where it finds it now.
 */
import Diff from "diff";

const message = "Hello, world!";

const secondMessage = "Goodbye, world!";

const diff = Diff.diffChars(message, secondMessage);

type test = Expect<
  Equal<
    typeof diff,
    {
      count?: number;
      value: string;
      added?: boolean;
      removed?: boolean;
    }[]
  >
>;
