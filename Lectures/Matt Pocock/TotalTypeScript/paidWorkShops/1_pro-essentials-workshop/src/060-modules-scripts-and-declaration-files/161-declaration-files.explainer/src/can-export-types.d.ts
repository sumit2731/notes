import { myFunc } from "./cant-use-runtime-code";

export type MyType = string;

export interface MyInterface {
  myProp: string;
}

export function myFunc2(num: number): number;

export const abc = 10;

/**
 * this is module file, so myVar is not avalaible globally
 */
declare const myVar: number;
