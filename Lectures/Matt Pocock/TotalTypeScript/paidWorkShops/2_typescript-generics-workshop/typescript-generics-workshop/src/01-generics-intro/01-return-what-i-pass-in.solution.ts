import { Equal, Expect } from "../helpers/type-utils";
/**
 * You do not need to specify generic while calling function, it is infered automatically from 
 * param type. also return type is given a type
 */
const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

/**
 * When you hover over function name, you can see generic type is derived automatically
 * also one is having type derived from generic
 */
const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
