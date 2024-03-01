import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. Inside declare global, you'll need to modify the Window
 * interface to add a makeGreetingSolution function
 */
/**
 * click on window to see from where type is coming. it takes us to .d.ts file.In last lecture we covered
 * from where this d.ts type is coming. In file we have -
 *
 * declare var window: Window & typeof globalThis;
 *
 * So it is declaring a window variable and giving it some type.so This is already in global type.
 *
 *
 * There are 2 definitions of window object - one is using declare and one is using interface, interface
 * one has all the types.one way of adding something to window object is to add anything in this
 * interface, but we should not do that.
 *
 * there is another way to do it. we can move to global context in normal ts file by using - using
 * declare global. now there we can define something in window interface and because of declaration
 * merging this will be combined with window interface defined in above file.
 *
 *declaration merging - interfaces with same name in same scope gets merged
 * Interfaces, especially when they're inside the global scope, can be used to patch together different
 *  things which all need to add into the global scope.That's why this behavior happens, is because we
 *  need to stuff things into the same object.
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
