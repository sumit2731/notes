/**
 * If you are using a JavaScript library without TypeScript definitions, you can use declare
 * module to create custom typings.
 */

// Declare the module if it's not typed
declare module "my-js-library" {
  export function doSomething(arg: string): string;
  export const version: string;
}

// Usage in your code
import { doSomething, version } from "my-js-library";

console.log(doSomething("Hello")); // Type-safe usage
console.log(version); // Type-safe usage
