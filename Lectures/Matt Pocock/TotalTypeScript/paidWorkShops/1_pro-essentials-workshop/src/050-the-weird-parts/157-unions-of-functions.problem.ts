const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => (input ? "true" : "false"),
};

const format = (input: string | number | boolean) => {
  const inputType = typeof input as "string" | "number" | "boolean";
  // here function type is union of individual type
  const formatter = objOfFunctions[inputType];
  // but while calling all union types are merged into one and function param types are intersected,
  // same as last question
  return formatter(input);
};
