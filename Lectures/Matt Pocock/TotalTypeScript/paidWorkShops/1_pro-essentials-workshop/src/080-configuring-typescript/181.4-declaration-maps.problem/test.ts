/**
 * let's say that we control this code and it lives in a monorepo somewhere. It lives in the same repo.
 * We want to actually say that,when we command click on my func, we actually want to go to the source
 * file here(ts), not the built code
 */

import { myFunc } from "./dist/index.js";

myFunc("Hello world");

myFunc(
  // @ts-expect-error
  123
);
