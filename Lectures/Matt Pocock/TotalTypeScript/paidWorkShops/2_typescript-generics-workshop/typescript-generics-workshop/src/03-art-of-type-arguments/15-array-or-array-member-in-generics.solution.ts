import { Equal, Expect } from "../helpers/type-utils";

/**
 * see lecture
 *
 * What this proves is that the rule of thumb of, "When you have a choice, go lower. Don't choose the high
 * representation. Choose the lowest, tightest representation," in general leads you to some good results.
 * Also, constraining this to be only the things that we care about is also important for getting this good
 * inference.
 */
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>
];
