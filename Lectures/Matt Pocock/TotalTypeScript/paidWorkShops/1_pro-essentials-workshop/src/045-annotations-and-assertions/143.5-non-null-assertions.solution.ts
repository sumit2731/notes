import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  if (searchParams.name) {
    /**
     * !(non null assertion) gets rid of null and undefined.
     *
     * we can even use this to access optional properties on object. for example searchParams is optional we can
     * searchParams!.name, but it will throw error at run time, if call function without passing searchParams.
     * this is useful ocassionally, mostly in cases when you know better than typescript. it is similar to 'as'
     */
    return users.filter((user) => user.name.includes(searchParams.name!));
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
