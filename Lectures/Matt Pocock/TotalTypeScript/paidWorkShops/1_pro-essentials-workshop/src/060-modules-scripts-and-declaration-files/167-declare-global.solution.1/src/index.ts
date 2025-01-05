import { Equal, Expect } from "@total-typescript/helpers";

/**
 * "declare global" lets you put the things in global scope from normal ts files also.
 * in declaration files you do not need this, because normally d.ts files are scripts(without import/export),
 * and anything you put in them is avalible globally, so anything declared is also avalaible globally.
 *
 * best practice is to use declaration files so that all declarations are at single place.
 */
declare global {
  const DEBUG: {
    getState(): { id: string };
  };
  // this is how you declare a function
  function logDebugInfo(message: string): void;
}

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
