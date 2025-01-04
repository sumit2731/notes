/**
 * between {} we can pass other string types - literal, union
 */
type AbsoluteRoute = `/${string}`;

const goToRoute = (route: AbsoluteRoute) => {
  // ...
};

goToRoute("/home");
goToRoute("/about");
goToRoute("/contact");

goToRoute(
  // @ts-expect-error
  "somewhere"
);
