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
//this is required to make this file a module
export {};

/**
 * Second Way to do this -
 * what this is doing is it's basically declaring a const of window that's only present for this file
 * this can be useful if you interact with your external scripts in just one file and you want to make
 * sure that that's the only file that does it.
 */

declare const window: {
  bar2: Bar;
};
