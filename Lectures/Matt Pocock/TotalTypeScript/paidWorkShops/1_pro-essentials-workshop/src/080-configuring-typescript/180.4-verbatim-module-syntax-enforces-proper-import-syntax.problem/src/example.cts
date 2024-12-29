// Fake ESM!

/**
 * Add a config in tsconfig that gives you error if you use ES Moudles in .cts file
 */
// @ts-expect-error
export const example = () => {
  return "hello!";
};
