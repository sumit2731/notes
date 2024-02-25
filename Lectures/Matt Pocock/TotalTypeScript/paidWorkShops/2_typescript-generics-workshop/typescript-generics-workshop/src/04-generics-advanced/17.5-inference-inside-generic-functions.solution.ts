import { Equal, Expect } from "../helpers/type-utils";

type Person = {
  name: string;
  age: number;
  birthdate: Date;
};

/**
 * THis function can also be called with any key but it can also be called with union of key types like this-
 * in below case return type is string | number, also second argument can be of type string | number
 */

const demo = remapPerson<"name" | "age">("name", "dd");
export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key]
): Person[Key] {
  /**
   *
   *
   *
   * Because of this wrinkle, TypeScript can't trust any narrowing inside a generic function.
   *
   * What It should be able to say inside here is it should give me a proper error, if I tried
   * to return a number for the user's birthdate, because it doesn't meet the contract in my
   * person up here, but it's not telling me that. It basically resolves any return types inside
   * these narrowing's as never, because it can't trust that key is going to be,it breaks  down at this level.
   *
   * What this means, if you start getting these strange errors when you're doing this narrowing inside
   * generic functions is you need to put an as on it. either you can return any or you can use any "proper"
   * type
   */
  if (key === "birthdate") {
    return new Date() as Person[Key];
  }

  return value;
}

const date = remapPerson("birthdate", new Date());
const num = remapPerson("age", 42);
const name = remapPerson("name", "John Doe");

type tests = [
  Expect<Equal<typeof date, Date>>,
  Expect<Equal<typeof num, number>>,
  Expect<Equal<typeof name, string>>
];
