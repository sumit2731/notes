//Use 'extends' keyword to narrow the value of a generic

//question-

export const getDeepValue = <Obj, FirstKey, SecondKey>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return {} as any;
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};

const result = getDeepValue(obj, "bar", "d");

//solution -

/**
 * extends expects union type. here we use keyOf to get union types of all keys from a object type
 */
export const getDeepValue2 = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};
// we get autocomplete after we use ""
const result2 = getDeepValue2(obj, "bar", "c");

console.log(result2);
