import { Equal, Expect } from "@total-typescript/helpers";

/**
 * @CON : Function return types can be wider than
 *  what is actually returned
 * @returns
 */
const returnsStringOrNumber = (): string | number => {
  return 1;
};

const value = returnsStringOrNumber();

if (typeof value === "string") {
  type test = Expect<Equal<typeof value, never>>;

  // @ts-expect-error
  value.toUpperCase();
}

/**
 * @PRO - Function return types can help enforce the type of the function
 * It will give you error when you try to do something stupid. it tells that
 * we are not covering the case for viewer
 */

type UserRole = "admin" | "editor" | "viewer";

function getPermissions(role: UserRole): string[] {
  switch (role) {
    case "admin":
      return ["create", "read", "update", "delete"];
    case "editor":
      return ["create", "read", "update"];
    // case "viewer":
    //   return ["read"];
  }
}

/**
 * @verdict
 *  so this is a judgment call that you're going to need to make. If you feel like, okay, I want my function to tell me
 * if I'm doing something wrong, I always want it to return an array of strings, then you should probably use a return
 * type there. And the return type is like a guide to you, the actual writer of the function, that you're doing everything
 * that you expect to.
 *
 * But if you just have a very, very, very simple function here like return string or number, usually it's going to be more
 * accurate just to not use the return type there.
 */

/**
 * @extra from code - see this lecture -
     section - mutability
     code - 106
 */
