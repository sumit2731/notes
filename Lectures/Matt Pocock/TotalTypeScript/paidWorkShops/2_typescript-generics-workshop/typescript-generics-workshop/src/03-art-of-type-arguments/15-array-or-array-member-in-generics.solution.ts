import { Equal, Expect } from "../helpers/type-utils";

/**
 * Read lecture Captions
 *
 * a)When you have an object like this, because an array is an object, basically, then TypeScript is
 *  not going to infer its members unless you point its focus there.
 *
 * b)it's often better to go lower. If you have a choice between representing the higher object or the
 * members of that object, you should probably represent the members of that object, if that is ony
 * what you care about
 */
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>
];
