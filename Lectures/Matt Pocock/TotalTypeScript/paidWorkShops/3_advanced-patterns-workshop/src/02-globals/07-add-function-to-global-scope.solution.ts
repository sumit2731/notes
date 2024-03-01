import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Because declare global works in multiple files, I've changed
 * the name of the variables/functions to avoid a conflict with
 * the other file
 */
document;

/**
 * Inside a declare global scope here, this basically gives us access to the global scope that
 * TypeScript can put things in. There are types inside the global scope that affects what globals
 * you can access.
 *
 * you have access to document, click on in and it will take you to a d.ts file.Anything you put in d.ts
 * file is automatically added to global scope. but in normal files (like this) you need to use
 * declare global and inside this, you can put things in global scope.
 *
 * how where does this d.ts came?
 *
 *
 * In tsconfig ,lib is a config option that allows you to specify global libraries that sort of get
 * bundled into the global scope here. by default it is commented out(DOM is included by default),
 * but if you comment that in then you need to add this value to have types like document  -
 *
 * lib: ['DOM']
 *
 * this specifies dom libraries in global scope.
 */
declare global {
  /**
   * Things that we add here will be avalaible all over the application without any import.
   * you can declare function, values types, interface
   *
   * This how we add functions.we cannot provide definition -
   * you get the error -> "An implementation cannot be declared in ambient contexts."
   *
   * this global area is ambient context
   */
  function mySolutionFunc(): boolean;
  /**
   * The way to get something inside a declare global, in an ambient context, to pull throughout the
   * entire app is to use - var. let, const wnt work. its just how syntax works.
   */
  var mySolutionVar: number;
  /**
   * we can use var with functions also, but function syntax is better to know as you can use function
   * overloads here, inside declare global
   */
  var mySolutionFunc2: () => boolean;
  /**
   * We can defines interfaces here and these will be avalible globally i.e you can use it in other files,
   * without importing.
   */
  interface Whatever {
    name: string;
  }
  /**
   * globals are bad. You maybe have use cases for using globals but, by default, you should be thinking
   * globals are bad. But, if you can't avoid globals, and you have to type them, then this is the way
   * to do it, by adding a declare global in there.
   */
}
/**
 * we do not need to implement it here, it can be implemented by a library which is imported by a CDN
 */
globalThis.mySolutionFunc = () => true;
/**
 * These can be accessed as
 *  standAlone
 *  globalThis.variableName
 *  window.variableName
 */
mySolutionFunc();
globalThis.mySolutionFunc();
window.mySolutionFunc();

globalThis.mySolutionVar = 1;

it("Should let you call myFunc without it being imported", () => {
  expect(mySolutionFunc()).toBe(true);
  type test1 = Expect<Equal<typeof mySolutionFunc, () => boolean>>;
});

it("Should let you access myVar without it being imported", () => {
  expect(mySolutionVar).toBe(1);
  type test1 = Expect<Equal<typeof mySolutionVar, number>>;
});
