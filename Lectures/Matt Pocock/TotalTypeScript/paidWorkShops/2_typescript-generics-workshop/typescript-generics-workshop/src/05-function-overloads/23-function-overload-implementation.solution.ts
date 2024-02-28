import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

interface AnonymousPrivileges {
  sitesCanVisit: string[];
}

interface UserPrivileges extends AnonymousPrivileges {
  sitesCanEdit: string[];
}

interface AdminPrivileges extends UserPrivileges {
  sitesCanDelete: string[];
}
/**
 * parameter to function can be either 'admin' | 'user' or any other string.
 * other case we handle by giving parameter as string. so more specific implementations overwrite,
 * less specififc ones
 *
 * so we define function overload for all cases. as function implementation is not visible outside now
 *
 * thing to be noticed here is that a actual definition should be amalgamation of all function overloads.
 * Also we said that overload signature and definition should match. they dnt need to be exactly match,
 * if type returned by overloads is assignable to function definition, then it works.
 *
 * @MyNotes
 * Ex- overload signature can return string literal, but actual definition can return string. and it wnt error,
 * out.here also, actual function can keep returning AnonymousPrivileges althrough functionOverloads return most
 * specific types. it just checks if return type of overload signature is assignable to implementation part.
 * In case implementation is retruning a union type, overloads can return any specific type from union
 *
 */
function getRolePrivileges(role: "admin"): AdminPrivileges;
function getRolePrivileges(role: "user"): UserPrivileges;
function getRolePrivileges(role: string): AnonymousPrivileges;
function getRolePrivileges(
  role: string
): AnonymousPrivileges | AdminPrivileges | UserPrivileges {
  switch (role) {
    case "admin":
      return {
        sitesCanDelete: [],
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    case "user":
      return {
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    default:
      /**
       *  It is possible to return the wrong things from this, too. You can return sitesCanDelete.
       * It's pretty hard to be super type-safe with a implementation function of a function overload.
       * You have to try and do the best that you can and make sure that at least the user that's using
       * your function is getting what they expect.Similar to generic functions, there are limitations
       * with how type-safe you can be inside the generic function or function overload that you're
       * creating here.
       *
       * Again, pros and cons, but this looks pretty nice. It gives you some really nice autocomplete as
       * the person using this. It's a pretty easy thing to look at for someone stumbling on this.
       */
      return {
        sitesCanVisit: [],
      };
  }
}

it("Should return the correct privileges", () => {
  const adminPrivileges = getRolePrivileges("admin");

  const userPrivileges = getRolePrivileges("user");
  const anonymousPrivileges = getRolePrivileges("anonymous");

  type tests = [
    Expect<Equal<typeof adminPrivileges, AdminPrivileges>>,
    Expect<Equal<typeof userPrivileges, UserPrivileges>>,
    Expect<Equal<typeof anonymousPrivileges, AnonymousPrivileges>>
  ];
});
