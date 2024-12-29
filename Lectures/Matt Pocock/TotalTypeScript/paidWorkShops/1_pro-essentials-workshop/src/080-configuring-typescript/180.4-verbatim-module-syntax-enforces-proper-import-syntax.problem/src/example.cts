// Fake ESM!

/**
 * Add a config in tsconfig that gives you error if you use ES Moudles in .cts file
 *
 * by default you will get error when you use commonjs syntac inside .mts files
 */
// @ts-expect-error
export const example = () => {
  return "hello!";
};
