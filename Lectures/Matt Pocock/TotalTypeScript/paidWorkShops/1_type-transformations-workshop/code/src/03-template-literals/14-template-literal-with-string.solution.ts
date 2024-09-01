type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");


/**
 * Extra - in template literals you can pass types in dynamic part. here we passed string but
 *  out can pass template literals or more specific strings
 */

type Name = 'sumeet' | 'sood';

type l1 = `/${Name}`