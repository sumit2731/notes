import { Equal, Expect } from "../helpers/type-utils";

/**
 * The angle brackets next to ReturnWhatIPassIn instantiate a type argument called T. After the equals sign,
 *  we 'return' it by using T.
 *
 * This type helper pattern allows us to create type functions which can return other types.Within angle bracket we have
 * argument to the function and after '=', we have what this function returns.
 * 
 * to arguments we can give them default values , we have them constraint to certain values
 *
 * With this syntax, ReturnWhatIPassIn is now a function, <T> is the argument to the function,
 *  and T is what it returns.
 * This whole idea of type functions, this is a lot about what we call generics on the type level.
 * I'm going to refer to these mostly as type helpers because that's sort of what they are. We have
 * a function that returns another type.
 *
 */
type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];

type t1 = Record<string, string>