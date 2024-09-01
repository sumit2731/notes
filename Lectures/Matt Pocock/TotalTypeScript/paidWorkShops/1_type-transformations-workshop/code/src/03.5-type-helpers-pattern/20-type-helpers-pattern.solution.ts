import { Equal, Expect } from "../helpers/type-utils";
/**
 * This is functions which returns other types. we will refer these as type helpers
 * T is argument to function. we can give them default values, we can constrat them
 * On right hand side of '=', is what function returns
 */
type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
