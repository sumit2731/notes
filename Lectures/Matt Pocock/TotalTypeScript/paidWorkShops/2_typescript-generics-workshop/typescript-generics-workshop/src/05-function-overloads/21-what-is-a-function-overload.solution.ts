import { Equal, Expect } from "../helpers/type-utils";

/**
 * Now we add different overloads on top of actual definition.
 * I don't need to provide an implementation signature here.
 */
function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: "matt"): "matt";

/**
 * Function overloads allow you to overload a function with different call signatures. Those call
 * signatures can have different return types based on what's passed in. You need to use the
 * function keyword for this. That's what we'll do.
 */

function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
