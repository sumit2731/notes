import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * see use of declare module on bard (gemini)
 * a)how declaration merging works when interfaces are in different files vs in different modules(gemini)
 *
 *
 * @terms -
 * a)global augmentation -in d.ts we have global ambient context, in other files we create it using declare
 *    global
 * b)Ambient Module Declarations - declare module (module augmentation, global augmentation)
 */

/**
 *
 *declaration merging - interfaces with same name in same scope gets merged
 * Interfaces, especially when they're inside the global scope, can be used to patch together different
 *  things which all need to add into the global scope.That's why we have declaration merging.
 * that is why this behaviour happens,  because we need to stuff things into the same object.
 */

declare global {
  interface Window {
    makeGreetingSolution: () => string;
  }
}

window.makeGreetingSolution = () => "Hello, world!";
// not avalible on globalThis object, only on window object
//globalThis.makeGreetingSolution();
//makeGreetingSolution()

it("Should let you call makeGreetingSolution from the window object", () => {
  expect(window.makeGreetingSolution()).toBe("Hello, world!");

  type test1 = Expect<Equal<typeof window.makeGreetingSolution, () => string>>;
});
