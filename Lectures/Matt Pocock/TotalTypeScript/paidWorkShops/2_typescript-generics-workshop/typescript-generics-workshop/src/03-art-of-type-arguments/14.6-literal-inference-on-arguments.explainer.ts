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
const acceptsValueWithObjectConstraint = <
  T extends {
    input: string;
  },
>(
  obj: T,
) => {
  return obj.input;
};

const result4 = acceptsValueWithObjectConstraint({ input: "abc" });

const result4WithAsConst = acceptsValueWithObjectConstraint({
  input: "abc",
} as const);

export {};
