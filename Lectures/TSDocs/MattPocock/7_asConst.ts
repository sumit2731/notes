const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
};

//bad way

const goToRoute = (route: "/" | "/admin" | "/users") => {};

goToRoute(routes.admin); // error because routes.admin type is string not string literal

//better way
const routes2 = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RoutesType = typeof routes2;
type RoutesUnion = RoutesType[keyof RoutesType];

const goToRoute2 = (route: RoutesUnion) => {};

goToRoute2(routes2.admin);

/**
 * Diffrence between Object.freeze and as const - as const works at nested level while object.freeze works
 * only at top level
 */
