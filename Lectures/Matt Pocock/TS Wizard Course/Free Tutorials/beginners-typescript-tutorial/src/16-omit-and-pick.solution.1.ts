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
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, "id">;
// we can omit multiple properties also. can even omitt properties that do not exist.
type MyType2 = Omit<User, "id" | "firstName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
