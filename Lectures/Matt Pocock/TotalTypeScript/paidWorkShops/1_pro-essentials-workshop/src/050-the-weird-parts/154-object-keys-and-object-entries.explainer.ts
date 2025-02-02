import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const usersWithIds: User[] = users.map((user, index) => ({
  ...user,
  id: index,
  age: 30,
}));

const userKeys = usersWithIds.map((user) => {
  /**
   * you might think that this keys that we returned from object dot keys,it should probably be
   * like, if TypeScript was really smart about it, it would say that is an array containing
   * either ID and name, but it's not. TypeScript, because it doesn't do these access property
   * checks in all places, it basically says object dot keys. Okay. We can't be sure that it has
   * all of the right properties on here.
   *
   *
   * same thing with Object.entries - [string, value].
   * if you understand that TypeScript doesn't deal in precise object types, it only handles like
   * it lets you pass excess properties all over the place.Then the looseness or the perceived
   * looseness of object dot keys and object dot entries will start to feel like it makes a bit
   * more sense
   *
   * its not losseless its more precise type that typescript can provide
   */
  const keys = Object.keys(user);

  const namekey = keys[0]!;

  const val = user[namekey];

  type test = Expect<Equal<typeof keys, Array<"id" | "name">>>;
  return keys;
});
