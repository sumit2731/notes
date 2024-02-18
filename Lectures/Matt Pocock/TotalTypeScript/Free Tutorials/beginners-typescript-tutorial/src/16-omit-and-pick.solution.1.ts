import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Person {
  id: string;
}
/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User
 * 
 * Omit property is defined using Exclude Property, also see that. also see use of 'in' operator in indexed types and unioins
 * see Example1
 */

type MyType = Omit<User, "id">;
// we can omit multiple properties also. can even omitt properties that do not exist.
type MyType2 = Omit<User, "id" | "firstName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];


/**
 * Example 1
 */
let obj1 = {
  name: 'Sumeet',
  id: 1
}

let s = "hello";
let n: typeof obj1;


type newObj = {
  [p in keyof (typeof obj1)] : string
}
