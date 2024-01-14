//Don't Do this
const example = (window as any).foo();

/**
 * These types are coming from the interface that is declared in global scope of typescript -Window
 * Like js , TS also has global scope for types,This is how you get access to global types like Partial
 * In order to get this working we need to change the global interface for Window
 */

window.addEventListener;

/**
 * First of all what we do is we say declare Global,declare Global lets us essentially gain access to
 * the global scope in a file that doesn't usually have the global scope so.
 * this ts file is just like any other file it's a module, so it's not putting things into the global
 * scope.
 *
 * Inside global if we declare any type, it will be available as globally. Like here we declare Name,
 * which is now available globally.
 *
 * Here we define interface Window and because of declaration merging, this interface definition merges
 * with already defined interface definition. This is possible with interfaces and namespace and not
 * possible with types.
 *
 * window.bar is avalaible at all places in your codebase i.e in other files also.
 */

type Bar = () => string;
declare global {
  type Name = "Sumeet";
  interface Window {
    bar: Bar;
  }
}

const example2 = window.bar();

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

/**
 * YOu not only can do this for window object but you can do this for other global objects also like
 * process.env
 */

/**
 * Video 2 - https://www.youtube.com/watch?v=q1im-hMlKhM
 *
 * how to type envirement variable in node.js
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DARABASE_URL: string;
    }
  }
}
