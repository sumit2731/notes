/* 
TypeScript has extended the import syntax with two concepts for declaring an import of a type:
*/

import type { createCatName } from "./animal.js";

// TypeScript 4.5 also allows for individual imports to be prefixed with type to indicate that the imported reference is a type:

import { createCatName, type Cat, type Dog } from "./animal.js";

/**
 * CommonJS and ES Modules interop - Not clear some compiler options is there
 */

/**
 *
 * module resolution strategy -
 *  classic (default when compiler option module is not commonjs)
 *  node - replicates how Node.js works in CommonJS mode, with additional checks for .ts and .d.ts.
 * Compiler options -
 *
 *  modules - Sets the module system for the program., decides how import/export is converted.
 *      possible options - none | commonjs | amd | umd | system | es6/es2015 | es2020 (dynamic imports, imports.meta) | es2022(top level await) | esnext | node16 | nodenext | none
 *
 * There are many TSConfig flags which influence the module strategy within TypeScript -
 *      moduleResolution - node16 or nodenext | node 10 | bundler | classic
 *      baseUrl - Sets a base directory from which to resolve bare specifier module names (now a days use paths instead of this)
 *      paths - A series of entries which re-map imports to lookup locations relative to the baseUrl if set,
 *          or to the tsconfig file itself otherwise.Note that this feature does not change how import paths
 *          are emitted by tsc, so paths should only be used to inform TypeScript that another tool has this
 *          mapping and will use it at runtime or when bundling.
 */

// @filename: index.ts
import { valueOfPi } from "./constants";

export const twoPi = valueOfPi * 2;
