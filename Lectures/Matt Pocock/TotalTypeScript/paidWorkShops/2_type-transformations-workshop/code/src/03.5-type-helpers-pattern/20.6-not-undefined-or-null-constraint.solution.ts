/**
 * read notes filder, there is notes about {} vs Object vs object
 */

export type Maybe<T extends {}> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
