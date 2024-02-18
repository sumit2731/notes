import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams = unknown;

type t1 = S.Split<UserOrganisationPath , "/">

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
