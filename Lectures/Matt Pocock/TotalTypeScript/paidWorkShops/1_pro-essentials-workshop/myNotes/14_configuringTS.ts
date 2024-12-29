/**
 * 178 - explains tsconfig in brief, see lecture.
 * go through all lectures once
 * 179 - noUncheckedIndexedAccess
 * 179.5 - noEmit
 *   alternate - tsc --watch --noEmit
 * 179.7 - module (module: "NodeNext" and moduleResolution: "NodeNext" implies same thing)
 * Behavior mentioned in lecture -
 *   possibleValues -
 *      "NodeNext" - it follows nodes semantics for what sort of thing is supposed to be in what sort of file
 *          cts - cjs (common js)
 *          mts - mjs (Es Modules)
 *      "ESNext" - It forces, to use EsModules
 *          cts - cjs (ES modules, this will break when nodes looks at it because cjs file cannot use esmodules)
 *      "CommonJs" - forces to use commonJs.
 *          mts - mjs (commonjs, this will break at runtime)
 *
 * Actual behavior -
 *  .cjs files will always have commonjs modules.
 *  .mjs will always have ES modules.
 *  .js files -
 *    module:ESNext - ES module
 *    module:CommonJs - commonjs
 *    module:NodeNext - see value of type in package.json field
 *      module - If value of module is NodeNext, then all ts files after conversion will have ESM
 *          modules.
 *      commonjs - If value of module is NodeNext, then all ts files after conversion will have
 *          commonjs modules
 *
 * 180 - module and moduleResolution
 */
