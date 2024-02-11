import { Equal, Expect } from "../helpers/type-utils";

/**
 * The angle brackets next to ReturnWhatIPassIn instantiate a type argument called T. After the equals sign,
 *  we 'return' it by using T.
 *
 * This type helper pattern allows us to create type functions which can return other types.
 *
 * With this syntax, ReturnWhatIPassIn is now a function, <T> is the argument to the function,
 *  and T is what it returns.
 *
 *  I'm going to refer to this 'generic within a type' pattern as a 'type helper'.
 */
type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
