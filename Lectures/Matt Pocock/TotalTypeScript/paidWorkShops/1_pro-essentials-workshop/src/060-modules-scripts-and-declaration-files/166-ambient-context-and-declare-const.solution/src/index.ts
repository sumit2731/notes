import { Equal, Expect } from "@total-typescript/helpers";

/**
 * we cant have implementation, declare also creates ambient  context like d.ts files.
 * since this is not d.ts file, this declaration is local to this file only
 */
declare const DEBUG: {
  getState: () => {
    id: string;
  };
};

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
