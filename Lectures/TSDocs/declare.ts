/**
 * declare is used a declare something at type level.at run times that things needs to be provided somehow.
 * it can used to define functions, variables, types etc.
 * These definitions are only avalaible inside same file(until and unless you define them in d.ts file)
 */

/**
 * declares variables with given type
 */
declare const backpack: string;
declare var someThing: number;

console.log(backpack);

/**
 * This tells that there will a function named this, whose type signature is provided
 *
 * but this will be avalaible in this file only
 */
declare function dummyFunc(num: number): number;

declare const window: {
  name: string;
};
