import { Equal, Expect } from "@total-typescript/helpers";

// CODE
/**
 * This is generic function, generic function is one which can receive type arguments.
 * see position of generics, when we used type helper generics , <> was on left side of '=',
 * here it is just before function parameters.for normal function also generic parameter
 * comes just before function parameters.
 *
 * unlike generic types helpers where passing generic argumentis required, here if we do not
 * pass generic argument it defaults to unknown.
 *
 * whatever we return from function has generic argument locked into it
 */
const createStringMap = <T>() => {
  return new Map<string, T>();
};

// TESTS

const numberMap = createStringMap<number>();

numberMap.set("foo", 123);
numberMap.set(
  "bar",
  // @ts-expect-error
  true
);

const objMap = createStringMap<{ a: number }>();

objMap.set("foo", { a: 123 });

objMap.set(
  "bar",
  // @ts-expect-error
  { b: 123 }
);

const unknownMap = createStringMap();

type test = Expect<Equal<typeof unknownMap, Map<string, unknown>>>;
