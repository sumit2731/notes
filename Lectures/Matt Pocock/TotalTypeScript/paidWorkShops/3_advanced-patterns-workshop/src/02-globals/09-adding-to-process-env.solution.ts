import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_SOLUTION_ENV_VAR: string;
    }
  }
}
/**
 * click on process.env (env) part to see, where it takes you. process.env.d.ts is not included
 * by default in global name space and it is also not added by adding something in lib in tsconfig.
 * you need to follow 2 steps for that see TSDocs folder for that.
 * It is added via npm package @types/nodes
 *
 * projects which do not ship with d.ts files on their node_modules, for those we need to download types
 * by -
 * @types/packageName(react, express etc). Whenever package name starts with @types, it get put into global
 * ambient context, because it is d.ts file.
 *
 * now click on process, we got to d.ts file. there we have global, which acts like declare global, we have
 * nameSpace NodeJS.projects use it avoid polluting global space. so type of process is - NodeJS.Process.
 * Process is interface inside Nodejs, we use '.' notation to access something in namespace.
  
  under this Process interface , we have property of env of type ProcessEnv, ProcessEnv is interface 
  inside Node namesapce. so here we add something in in this interface add typeings.
 *
 * Namespaces, node is the main place that they're used, but they're also used in various other external
 * libraries that put things into the global.
 */
process.env.MY_SOLUTION_ENV_VAR = "Hello, world!";

it("Should be declared as a string", () => {
  expect(process.env.MY_SOLUTION_ENV_VAR).toEqual("Hello, world!");
});

it("Should NOT have undefined in the type", () => {
  const myVar = process.env.MY_SOLUTION_ENV_VAR;
  type tests = [Expect<Equal<typeof myVar, string>>];
});
window;
