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
 *
 * 180.4,180.6 - verbatimModuleSyntax
 *
 * 181 - target vs lib
 *
 * 182 - jsx, possible values -
 *   preserve, react, react-jsx
 *
 * 183 - By default, TypeScript determines which tsconfig.json to use by looking for the closest
 *  one to the .ts file in question. If there are no other tsconfig.json files, TypeScript
 *  defaults to using the one in the root of the repo.
 *
 *  Here we had different tsconfig for client and server. they have different option for lib as a
 *  result different globals are avalaible for them.
 *
 * see package.json to see how we can specify location of tsconfig while running tsc from
 *  terminal.
 *  tsc --project "locationOfTsconfig"
 *  tsc --project ./src/client/tsconfig.json --watch
 *
 * 185 - you can define a base config for tsConfig and then other files  can extend
 *  the compilerOptions using extends keyword
 *
 * 186 - If we multiple tsconfigs for different projects in same repo. We want a single place where we can run ts compiler and
 *    and see results. setup -
 *    Solution 1  -
 *     a)In package.json we have single command which runs the tsc in batch mode(its only in batch mode refrences are run
 *       , see in chatgpt what build mode means)and we refer to tsconfig in project root.
 *     b)This tsconfig contains -
 *       1)refrences to other tsconfig files.This tsconfigs assume there current directory as ts project.
 *       2)empty files array tells that this is not a config file but file which refrences other tsconfigs i.e it is used
 *        as refrences tsconfig.
 *
 */
