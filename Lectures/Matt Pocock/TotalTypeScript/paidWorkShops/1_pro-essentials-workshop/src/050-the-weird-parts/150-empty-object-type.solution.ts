/**
 * {} represents everything except null or undefined
 * It can also accept object with some properties i.e
 * you can pass extra properties to it.
 */
const acceptAnythingExceptNullOrUndefined = (input: {}) => {};

acceptAnythingExceptNullOrUndefined("hello");
acceptAnythingExceptNullOrUndefined(42);
acceptAnythingExceptNullOrUndefined(true);
acceptAnythingExceptNullOrUndefined(Symbol("foo"));
acceptAnythingExceptNullOrUndefined({});
acceptAnythingExceptNullOrUndefined([]);
acceptAnythingExceptNullOrUndefined(() => {});
acceptAnythingExceptNullOrUndefined(/foo/);
acceptAnythingExceptNullOrUndefined(new Error("foo"));

acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  null
);
acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  undefined
);
