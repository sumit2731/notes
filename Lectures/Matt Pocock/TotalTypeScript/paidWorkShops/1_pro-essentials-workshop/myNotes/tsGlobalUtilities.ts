/**
 * We used below typeHelpers and also went through implementations of these
 *
 *
 * a)Parameters
 * b)ReturnType
 * c)Awaited
 */

type CustomParameters<F extends (...args: any[]) => any> = F extends (
  ...args: infer R
) => any
  ? R
  : never;
type CustomReturn<F extends (...args: any[]) => any> = F extends (
  ...args: any[]
) => infer R
  ? R
  : never;

/**
 * Simple implementation
 */
type CustomAwaited<T> = T extends {
  then: (cb1: (val: infer R) => any, cb2: any) => any;
}
  ? CustomAwaited<R>
  : T;

/**
 * In case argument to then was not callable return never type
 */
type CustomAwaited2<T> = T extends { then: (cb1: infer cb, cb2: any) => any } // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped, return orignal object instead
  ? cb extends (val: infer V) => any // if the argument to `then` is callable, extracts the first argument, otherwise return never
    ? CustomAwaited2<V> //// recursively unwrap the value
    : never
  : T;

type CustomPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type CustomOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
//this is orgnal implementation
type CustomOmit2<T, K> = Pick<T, Exclude<keyof T, K>>;
