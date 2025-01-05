import { Equal, Expect } from "@total-typescript/helpers";

const state = window.DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;

/**
 * solution 2 - to declare something in global scope in normal ts file
 */

// declare global {
//   interface Window {
//     DEBUG: {
//       getState(): { id: string };
//     };
//   }
// }
