/**
 * a) noEmit: true - it means do not generate output files
 * b)"outDir": "./dist"
 *      This gives the output folder, where compiled js files will be genrated.
 * c)noImplicitOverride - need to add override in front of method that is present in parent class but
 *  needs to be overrideen.if this is trues and you do not add anything, in front of method,you will
 *  get error. if you add it a dn method does not exists then also you will get error. it makes sure
 *  that method is getting overidid.
 * d)moduleDetection - defualtValue - auto. any file which does not have import-export will be treated as
 *   script. only files with import or export statement will be treated a module. 'force' option treat
 *   every file as module regardless of import-export statement.
 *   lecture details - Pro essentials, Modules Scripts and declarations, lecture 2.
 *
 * e)target - specifies which version of js to target to.when we specify different targets
 *  We can specify different features added into the global scope of TypeScript again.there
 *  are different declaration files for each version and only matching declaration files is
 *  included.
 *  lecture -  Pro essentials, 172
 *
 * f)lib - lib option also lets us drill down into the specific features and libraries we want to
 *  include in our project,For example, you could specify a target of ES5 and but bring in ES2022
 *  features by specifying lib as ["ES2022"].However, the general advice from the TypeScript team
 *  suggests that you specify both target and lib in your configuration to ES2022 as a safe cours
 *  of action.
 * 
 *  By default, TypeScript uses the target option to identify the environment if lib is not specified.
    If target is set to ES2022, TypeScript will automatically include the ES2022,DOM and DOM.Iterable.
    However, if you manually define lib, you'll need to include these manually.
    However, explicitly stating which libraries are included can help ward off potential problems later
    on, particularly when operating in diverse environments like Node.js.
 *  lecture - Pro essentials, 172, 173, 174

    compilerOptions: {
      "target": "ES2022",
      "lib": [
        "ES2022",
        "DOM",
        "DOM.Iterable"
      ]
    }

  g)skipLibCheck - defualt value is false. when value is true, then ts does not do typechecking on d.ts
   files.It means you can have implementations in d.ts or other errors in there, ts will not report them.
   but declarations will be considered. make it true, makes ts typechecking very fast.
    recommended value is true.
   lecture - Pro essentials, 176.5
 */

/**
 * g)refrences - refer pro-essential,configuring typescript, typescriptProject Refrences
 *    https://www.youtube.com/watch?v=S-jj_tifHl4
 */
/**
 * h)composite - composite:true
 *  It tells TypeScript that this is a child project,it basically needs to be run as a sort of run with project references.
 *   a)It means that this tsconfig is refrenced by some other tsconfig
 *   b)enables incremental builds by generating tsconfig.tsbuildinfo file(ts needs to run in build mode for this),
 *     it means files which are changed only those are rebuild.
 *   c)When you set composite: true, it enforces and enables several other compiler options:
 *      Declaration Files: It automatically sets declaration: true, which generates .d.ts files for your TypeScript code.
        Declaration Maps: It enables declarationMap: true, creating source maps for declaration files.
        Incremental Compilation: It turns on incremental: true, allowing TypeScript to reuse information from previous 
         compilations to speed up subsequent builds. it generates tsbuildinfo files, means it cache the results of compilation
          and type checking.
        rootDir (if not explicitly set) defaults to the directory containing the tsconfig.json file.

  i)skipLibCheck:true
    It does not check the types of all declaration files (*.d.ts). This can significantly speed up
    compilation.
 */

/**
 * @extra From Course
 */

/**
 * 1)include - Specifies a list of files or directories to include in the compilation.
 *     default value - see in single line comment on top
 *      a)All TypeScript (.ts, .d.ts, and .tsx) files in the project directory and subdirectories
 *      b)If allowJs is set to true, it also includes JavaScript (.js and .jsx) files
 *
 * note - here wild cards are allowed
 */

//defaultValue of include - "include": ["**/*"]
//syntax - "include": ["src/**/*.ts", "tests/**/*.ts"]

/**
 * 2)exclude - Specifies a list of files or directories to exclude from the compilation.
 *   Excludes override any included files.If a file is mentioned in both include and exclude,
 *   then it is excluded by default.so this can be used to exclude some files mentioned in include.
 *
 *   default - ["node_modules", "bower_components", "jspm_packages"]
 *    note - wild cards are allowed
 */

//syntax - "exclude": ["dist", "node_modules", "**/*.test.ts"]

/**
 * 3)files - Specifies an explicit list of files to include in the compilation.
 *   Default: If this property is specified, only the listed files are included.
 *
 * "files": ["src/index.ts", "src/utils.ts"]
 */

/**
 * 4)paths - used to define alias for a path. ex -
 * 
 * {
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}
 */

/**
 * 5)rootDir - purpose
 *    a)To determine the structure of the output directory
 *    b)To enforce that all compiled files are located within the specified root
 *
 * default -
 *  a)If not explicitly set, TypeScript infers the rootDir as the longest common path of
 *    all non-declaration input files
 *  b)If composite is set, the default is the directory containing the tsconfig.json file
 *
 */

/**
 * 6)typeRoots - Useful when we want ts to include d.ts files defined at custom locations.
 *   default Value - ["node_modules/@types"]
 *   generally all d.ts files which are included via include property is considered by tsc.but
 *    if you have some d.ts types outside paths mentioned by import, then you can use this.
 */

/**
 * composite
 */
