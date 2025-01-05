import { Equal, Expect } from "@total-typescript/helpers";
import { StringValidation } from "zod";

/**
 *
 * Whenever you use declare, it's like an ambient context(like d.ts files). And ambient basically means it
 * just gets injected without needing to provide any implementation. So this means we don't need an
 * implementation
 *
 * since this is module file, this declaration is local to this file only. if this has been a script file,
 * then this would have been made available globally.this thng is true for normal files as well as d.ts files
 */
declare const DEBUG: {
  getState: () => {
    id: string;
  };
};

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;

/**
 * Other examples of declare
 */

declare function getName(name: string): StringValidation;
declare const getId: (name: string) => string;
