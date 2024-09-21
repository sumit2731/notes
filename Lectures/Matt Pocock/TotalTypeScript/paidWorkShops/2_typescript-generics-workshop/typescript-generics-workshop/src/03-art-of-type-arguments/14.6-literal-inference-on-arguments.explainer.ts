// When returning the value only, it infers
// the literal type

//1
const acceptsValueOnly = <T>(t: T) => {
  return t;
};

const result = acceptsValueOnly("a");
//    ^?

//2
const acceptsValueInAnObject = <T>(obj: { input: T }) => {
  return obj.input;
};

const result2 = acceptsValueInAnObject({ input: "abc" });
//    ^?

const result2WithAsConst = acceptsValueInAnObject({ input: "abc" } as const);
//    ^?

//3
const acceptsValueInAnObjectFieldWithConstraint = <T extends string>(obj: {
  input: T;
}) => {
  return obj.input;
};

const result3 = acceptsValueInAnObjectFieldWithConstraint({ input: "abc" });
//    ^?

//4

/**
 * Because the constraint is not actually on the input itself, it's on the entire object, then
 * TypeScript doesn't actually infer the input there.It's like where you put the generic inference
 * actually matters for what gets inferred, and whether it gets inferred as a literal or not. In
 * other words, if the entire object is in that slot, then it's not going to be inferred as well
 * as if you just infer the literal value on there. That's the difference.
 *
 *
 * The further you get away from the thing that you're actually trying to infer, the more you try to
 * infer in those slots, the worse the inference is going to be. There are some exceptions to that,
 * which we'll look at in the future
 */
const acceptsValueWithObjectConstraint = <
  T extends {
    input: string;
  }
>(
  obj: T
) => {
  return obj.input;
};

const result4 = acceptsValueWithObjectConstraint({ input: "abc" });

const result4WithAsConst = acceptsValueWithObjectConstraint({
  input: "abc",
} as const);

export {};
