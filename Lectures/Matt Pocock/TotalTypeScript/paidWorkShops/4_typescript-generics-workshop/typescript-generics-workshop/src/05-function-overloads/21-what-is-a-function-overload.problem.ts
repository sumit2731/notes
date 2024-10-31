import { Equal, Expect } from "../helpers/type-utils";

/**
 * We've done this before, but with generics. This time, I want you to do with function overloads.
 */
const returnWhatIPassIn = (t: unknown) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
