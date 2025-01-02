/**
 * 178 - explains tsconfig in brief, see lecture.
 * go through all lectures once
 * 178.5 - isolatedModules
 * 179 - noUncheckedIndexedAccess
 *    Affects - array and indexSignatures types
 * 179.5 - noEmit
 *   alternate -
 *      tsc --watch --noEmit
 * 179.7 - module (module: "NodeNext" implies moduleResolution: "NodeNext", so if you specify former you can
 *  ignore later)
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
 * 180 -
 *  module - what kind of code you want to be emitted in your js (common js or ES modules)
 *  moduleResolution - how Ts resolves your import
 *
 *  when you use tsc to compile your code -
 *   module: NodeNext
 *   moduleResolution: NodeNext
 *
 * when some bundler is transpiling your code -
 *   module: ESNext (later it was said to use "presreve") module:"preserve" implies moduleResolution:"Bundler"
 *   moduleResolution: Bundler
 *
 * 180.4,180.6 - verbatimModuleSyntax
 *   180.4 - does not allow to use ESM syntax in .cts files, see example.cts. also see import and export syntax
 *     for ts in commonjs system
 *   180.6 - when importing types, you need to type keyword. using tis type keyword, some imports are removed from
 *     complied js files.
 *
 * 181.1 - target vs lib
 *  target - version to which your js will be in after compiling
 *  lib - features that are available in you env.
 *  you may think let me write code in advanced feature, anyway tsc will compile them to target, but note that tsc will
 *   only convert syntax, wnt convert API.so it is advise to keep both in syn.
 *
 * 181.2-
 *  declaration:true - generates .d.ts files
 *  this is required when publishing on npm or distributing inside a mono repo
 *
 * 181.4 -
 *  declarationMap: true,
 *  when you click on function imported from a file, you will be taken to ts file not d.ts file.
 *  this also generates a new file - index.d.ts.map. it is map between d.ts and source ts file.
 * 182 - jsx, possible values -
 *   preserve - tsx -> jsx, jsx remains as it is.you may want to use it when you are not bundling with tsc.
 *   react - tsx -> js, jsx is replaced by React.createElement
 *   react-jsx - tsx -> js, jsx is replaced by more modern jsx transform. it is recommneded option.

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
 * Here see that 
 *
 * 185 - you can define a base config for tsConfig and then other files  can extend
 *  the compilerOptions using extends keyword
 *
 * 186 - If we multiple tsconfigs for different projects in same repo. We want a single place where we can run ts compiler and
 *    and see results. setup -
 *    Solution 1  -
 *     a)In package.json we have single command which runs the tsc in batch mode(its only in build mode refrences are run
 *       , see in chatgpt what build mode means)and we refer to tsconfig in project root.
 *     b)This tsconfig contains -
 *       1)refrences to other tsconfig files.This tsconfigs assume there current directory as ts project.
 *       2)empty files array tells that this is not a config file but file which refrences other tsconfigs i.e it is used
 *        as refrences tsconfig.
 *
 *     c)In tsconfig.base.json we have composite: true. this makes sure that tsbuildinfo files are generated.
 *   Solution 2 -
 *     a)Here all tsconfigs files are moved to root of project
 *
 *   Solution 3 -
 *     a)we kept single tsconfig at root level, all others are moved into config folder.
 *
 *   recommeneded - solution1 or solution 2
 *
 */
/**
 * Option not discussed -
 * esModuleInterop
 * declarationMap
 */

// defaultValue - "include": ["**/*"]
/**
 * extra from course
 *
 * 1)include - which files to be included in compilation.
 * 2)rootDir - purpose
 *    a)To determine the structure of the output directory
 *    b)To enforce that all compiled files are located within the specified root
 *
 * default -
 *  a)If not explicitly set, TypeScript infers the rootDir as the longest common path of
 *    all non-declaration input files
 *  b)If composite is set, the default is the directory containing the tsconfig.json file
 */
