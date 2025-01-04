import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

/**
 * TypeScript is complaining about searchParams.name because it thinks we could be modifying it back to undefined
 * inside the filter callback. This is why we were previously able to solve this problem by extracting
 * searchParams.name into a constant variable and performing the check against that.
 */
const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  if (searchParams.name) {
    //here it is defined
    console.log(searchParams.name);
    /**
     * TypeScript thinks that when you run a function inside that scope, you could be modifying searchParams.name.
     * You could be modifying it back to undefined. TypeScript doesn't know that kind of in this area here,
     * or in this scope, that we're not modifying name to be just undefined.
     */
    return users.filter((user) => user.name.includes(searchParams.name));
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ]
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
