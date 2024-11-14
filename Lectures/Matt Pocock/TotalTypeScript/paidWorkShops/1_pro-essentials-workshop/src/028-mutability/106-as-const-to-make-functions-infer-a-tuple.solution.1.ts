import { Equal, Expect } from "@total-typescript/helpers";

/**
 * @Reason for any type - see snippet at end of code.
 * Here we are returing different tupples in different branches of function, so ts tries to come up with a return type,
 * here in this case, that return type is any[]. seecode snippet at end of code to see why it is any.
 *
 *  but we can define our own return type and then all values should be
 * asignable to that type.
 */
const fetchData = async (): Promise<[Error | undefined, any?]> => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data = await result.json();

  return [undefined, data];
};

const example = async () => {
  /**
   * Note how desturted array works with  tupple types
   */
  const [error, data] = await fetchData();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>,
  ];
};

/**
 * @Here Because of any type in one array,It generalize the return type to array.
 * if we do not have any type then we get a return tyoe which is union typoe
 */
const randomNumber = async () => {
  const num = Math.random();
  if (num > 0.5) return [new Error("Abc")];
  else {
    const a = await fetch("/abc");
    const b = await a.json();
    /**
     * so here type of b is any,ts has no idea that you want to have 2 types so js assign this expression any[].
     * it then combines it with return type in if branch,as result return tye is any.
     *
     * if we remove any return type then return type of function changes
     */
    return [undefined, b];
    // return [undefined];
  }
};
