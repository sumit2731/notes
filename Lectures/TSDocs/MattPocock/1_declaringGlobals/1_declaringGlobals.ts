//Don't Do this
//const example = (window as any).foo();

/**
 * These types are coming from the interface that is declared in global scope of typescript -Window
 * Like js , TS also has global scope for types,This is how you get access to global types like Partial,Pick,Omit
 * In order to get this working we need to change the global interface for Window
 */

//window.addEventListener;

/**
 * First of all what we do is we say declare Global,declare Global lets us essentially gain access to
 * the global scope in a file that doesn't usually have the global scope so.
 * this ts file is just like any other file it's a module, so it's not putting things into the global
 * scope.
 *declare global essentially lets us gain access to global scope, in a file that usually does'nt have a global scope.
 This TS file is just like any other file, it is a module.so it is not putting things in global scope.

 Inside declare global if we define any type it is avaible globally across all files.
 * 
 *Inside declare global , we declare interface of window and because of declaration merging, this interface definition merges
 * with already defined interface definition. This is property of interfaces, they actually merge the declarations with the
 * same name.This is possible with interfaces and namespace and not possible with types.
 *
 * window.bar is avalaible at all places in your codebase i.e in other files also.
 */

type Bar = () => string;
declare global {
  /**
   * This type is avalble globally across all files without any import
   */
  type Name = "Sumeet";
  interface Window {
    bar: Bar;
  }
}

/**
 * Note bar is avalible on window not on globalThis.
 * how to make it avalaible on globalThis or standalone
 */

export {};

const name: Name = "Sumeet";

/**
 * Second Way to do this -
 * what this is doing is it's basically declaring a const of window that's only present for this file
 * this can be useful if you interact with your external scripts in just one file and you want to make
 * sure that that's the only file that does it.
 */

declare const window: {
  bar2: Bar;
};
