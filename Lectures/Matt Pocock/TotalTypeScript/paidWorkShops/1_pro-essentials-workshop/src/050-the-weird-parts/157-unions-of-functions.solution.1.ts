const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? "true" : "false"),
};

const format = (input: string | number | boolean) => {
  const inputType = typeof input as "string" | "number" | "boolean";
  const formatter = objOfFunctions[inputType];
  /**
   *  when you have functions with incompatible type signatures being union together, you're
   * sometimes going to need to use as never in these situations to get yourself out of a bit
   * of bother
   */
  return formatter(input as never);
};
