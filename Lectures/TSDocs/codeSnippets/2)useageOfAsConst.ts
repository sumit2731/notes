/* 
You can use as const to convert the entire object to be type literals:

The as const suffix acts like const but for the type system, ensuring that all properties are assigned
    the literal type instead of a more general version like string or number.

It makes all properties as readonly
*/

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req2.method);

//Problem from Matt Pocock Blog

const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
};

//problem1
const goToRoute = (route: "/" | "/admin" | "/users") => {};

//problem2

goToRoute(routes.admin);

//solution

const routes2 = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RouteTypes = typeof routes2;
type RootValuesType = RouteTypes[keyof RouteTypes];

const goToRoute2 = (route: RootValuesType) => {};

goToRoute(routes2.admin);
