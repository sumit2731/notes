import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

/**
 * This is useful, but less powerful than solution 2:
 * 
 * My explanation - Route['route'] return - '/' | /'about' | '/admin' | '/admin/users' 
 * 
 * Then on left hand side we iterate over this type and on right hand sside we extract from union matching type
 */
type RoutesObject = {
  [R in Route["route"]]: Extract<Route, { route: R }>["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];