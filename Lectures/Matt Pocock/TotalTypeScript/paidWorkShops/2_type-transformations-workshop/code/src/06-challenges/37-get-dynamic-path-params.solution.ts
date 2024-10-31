import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

/**
 * @MyNotes
 * for some reasons this doe snot work
 * possible reasons is that something related to associativity of type of union types in generics
 * Tip - always do filtering in alias section of mapped type
 */

type ExtractPathParams2<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] extends `:${infer S}` ? S : never]: string;
};

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];

type t2 = Split<"sumeet", "u", []>;

type Split<
  S extends string,
  SS extends string,
  Arr extends Array<string>
> = S extends `${infer BS}${SS}${infer RS}`
  ? Split<RS, SS, [...Arr, BS]>
  : [...Arr, S];
