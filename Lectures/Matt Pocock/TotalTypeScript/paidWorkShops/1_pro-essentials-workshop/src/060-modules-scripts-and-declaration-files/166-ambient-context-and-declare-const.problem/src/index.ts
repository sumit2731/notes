import { Equal, Expect } from "@total-typescript/helpers";

/**
 * Problem
 *
 * Here this DEBUG is provided by some external script at run time.
 * we to tell ts that there is DEBUG named things and define type for it.
 * also tyope should be avalible in this file only
 */

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
