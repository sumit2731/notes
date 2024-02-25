import { Equal, Expect } from "../helpers/type-utils";

/**
 * When you have an object like this, because an array is an object, basically, 
 * then TypeScript is not going to infer its members unless you point its focus there.
 * 
 * We know that the principle that we've had before is that it's often better to go lower.
 * If you have a choice between representing the higher object or the members of that object,
 * you should probably represent the members of that object, if that's all you care about
 * 
 * 
 *  In solution, what's happening is that the thing that's being inferred is the thing inside the generic
 *  slots, so we end up with info or debug or error or warning instead of just string.
 * 
 * There's probably some bit in the compiler  that is telling it to, "When you have an extend string here and 
 * when it's in a member of an array, then infer those members literally."
 * 
 * What this proves is that the rule of thumb of, "When you have a choice, go lower. Don't choose the
 * high representation. Choose the lowest, tightest representation," in general leads you to some good results.

  Also, constraining this to be only the things that we care about is also important for getting this good inference.
  also go though lecture if time allows
 */
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
