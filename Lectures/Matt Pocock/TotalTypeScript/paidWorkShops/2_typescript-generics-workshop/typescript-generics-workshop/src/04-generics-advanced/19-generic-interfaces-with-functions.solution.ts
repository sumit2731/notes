import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * The key lesson is that even if you're inside an interface or even if you're inside a type, let's say,
 * then you could actually add a function which has a generic on it right there, super-duper useful and
 * especially useful -- this pattern is so, so common -- when you pass in a function to transform something
 *  to something else.
 *
 * You can even call clone again .clone, and generic type will just flow freely.
 *
 * This is the basis of the builder pattern of chaining methods that we'll see in future exercises.
 */
export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  // You can fix this by only changing the line below!
  clone: <U>(transform: (elem: T) => U) => Cache<U>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: (transform) => {
      const newCache: Record<string, any> = {};

      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }
      return createCache(newCache);
    },
  };
};

it("Should let you get and set to/from the cache", () => {
  const cache = createCache<number>();

  cache.set("a", 1);
  cache.set("b", 2);

  expect(cache.get("a")).toEqual(1);
  expect(cache.get("b")).toEqual(2);
});

it("Should let you clone the cache using a transform function", () => {
  const numberCache = createCache<number>();

  numberCache.set("a", 1);
  numberCache.set("b", 2);

  const stringCache = numberCache.clone((elem) => {
    return String(elem);
  });

  const a = stringCache.get("a");

  expect(a).toEqual("1");

  type tests = [Expect<Equal<typeof a, string | undefined>>];
});
