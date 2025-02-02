const acceptOnlyEmptyObject = (input: {}) => {};

acceptOnlyEmptyObject({});

/**
 * we should get error when we try to pass something other than empty object
 */

acceptOnlyEmptyObject({
  // @ts-expect-error
  a: 1,
});
acceptOnlyEmptyObject(
  // @ts-expect-error
  "hello"
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  42
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  true
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  Symbol("foo")
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  []
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  () => {}
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  /foo/
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  new Error("foo")
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  null
);
acceptOnlyEmptyObject(
  // @ts-expect-error
  undefined
);
