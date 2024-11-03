// TypeScript sometimes warns you about
// things which will fail at runtime

const a = null;

a.toString();

// But not everything it warns you
// about will fail at runtime

const obj = {};

obj.foo = "hello";

// It will try to warn you as close to
// the source of the problem as possible

type MyUser = {
  name: string;
};

const user: MyUser = {
  nme: "Katherine",
};

// But sometimes that's not always possible

type FunctionThatReturnsAString = () => string;

const fn: FunctionThatReturnsAString = () => {
  return 123;
};

/**
 * If we reworked the fn to be a function with a return type of string, then the error message would
 * move closer to the source:
 */

const fn2 = (): string => {
  return 123; // red squiggly line under `return`
};
