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
 * 183 - here we need to have different tsconfigs for different files.so created diffrent folder and had
 *   tsconfig in each folder.
 * 
 *  a)For typechecking vscode uses nearest tsconfig file. hence files under client and server will correct
 *     tsconfigs checked for their files.
 *  b)for compilation, we can mention tsconfig for tsc server using --project. see packahe.json.
 *     now under each tsconfig we can ention which files to compile using include,exclude and files.
 *     if we do not mention anything(which is case here), so here it takes all files under client(or server)
 *     folder for compilation. this is because default value for include is - (see single line comment at end 
 *     of file), which means include all files in this path, where tsconfig is located.
 * 
 * 184 -since both client and server folder have different tsconfigs , which include different files for
 *     compilation(ts and d.ts files), we can have different global declarations through d.ts files in each
 *     of them.
 *
 * 185 - extends. this helps to define a single tsconfig and other files can extends from it.
 *
 * 186 - If we have multiple tsconfigs for different projects in same repo. We want a single place where we can run ts
 *    compiler and see results. setup -
 *    Solution 1  -
 *     a)In package.json we have single command which runs the tsc in build mode and we refer to tsconfig in project root.
 *      In build mode -
 *       1)its only in build mode tsc also runs refrence tsconfigs too,(see in chatgpt what build mode means)
 *       2) it emits tsconfig.tsbuildinfo files, which are large and should not be committed to your repository.
 *         These files cache the results of type checking, which makes subsequent checks much faster. because 
 *         it's caching the results of my type checks.So project references are a superb way of coordinating 
 *         type checks across an entire repo.you run one command in the root. It caches the result of various things.
 *          it means that you can just run a single command to type check everything.
 * 
 *     b)This tsconfig contains -
 *       1)refrences to other tsconfig files.This tsconfigs assume there current directory as ts project.
 *       2)empty files array tells that this file is not responsible for actually type checking any files.
 *        All it's going to be used for is as a reference tsconfig.json
 *
 *     c)In tsconfig.base.json we have composite: true. So this means that this enables constraints, as it says here, 
 *        to allow a TypeScript project to be used with project references.
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
 */
