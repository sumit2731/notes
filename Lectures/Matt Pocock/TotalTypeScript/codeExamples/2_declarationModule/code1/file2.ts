import { add } from "./file1";

declare module "./file1" {
  export function subtract(a: number, b: number): number;
}

// Implementation of the new function
export function subtract(a: number, b: number): number {
  return a - b;
}
