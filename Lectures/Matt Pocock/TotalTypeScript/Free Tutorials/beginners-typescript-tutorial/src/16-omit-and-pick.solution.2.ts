import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User
 * 
 * see defination of Pick by hovering over it. see use of 'in' operator in union and index types.
 * also see how to respectric second type in Pick
 */

type MyType = Pick<User, "firstName" | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
