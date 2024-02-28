import { Equal, Expect } from "../helpers/type-utils";

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKey = keyof typeof obj;

/**
 * The reason it's happening is because getObjValue here, it could be called with a bunch of
 * different things. It could be called with a. It could be called with b. It could be called
 * with c. It could also be called with a union type of those members. It could be called with
 * a or b like this. It could be called with b or c, for instance.
 *
 * Defaulting it to A doesn't give TypeScript enough to work with in terms of inferring stuff.
 * It doesn't quite make the leap that if you don't pass anything, you to grab a in
 * this slot here. In fact, it still infers a, b, or c.(hover over function call, when no
 * argument is passed)
 */

function getObjValue(): (typeof obj)["a"];
function getObjValue<TKey extends ObjKey>(key: TKey): (typeof obj)[TKey];
function getObjValue(key: ObjKey = "a") {
  return obj[key];
}

const one = getObjValue("a");
const oneByDefault = getObjValue();
const two = getObjValue("b");
const three = getObjValue("c");

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof oneByDefault, 1>>,
  Expect<Equal<typeof two, 2>>,
  Expect<Equal<typeof three, 3>>
];
