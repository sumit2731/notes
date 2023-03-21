import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};
/**
 * keyof only operates on types. you cannot pass testingFrameworks directly to keyof
 */
type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];

/**
 * Things learnt - how to convert object type into union. 'keyof' keyword.
 */
