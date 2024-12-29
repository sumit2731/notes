/**
 * a) noEmit: true - it means do not generate output files
 * b)"outDir": "./dist"
 *      This gives the output folder, where compiled js files will be genrated.
 * c)noImplicitOverride - need to add override in front of method that is present in parent class but
 *  needs to be overrideen.if this is trues and you do not add anything, in front of method,you will
 *  get error. if you add it a dn method does not exists then also you will get error. it makes sure
 *  that methd is getting overidid.
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
 * @extra from course
 *
 * 1)typeRoots,include - be default ts looks for d.ts files in node_modules/@types folder and project directpry.
 *  if you have d.ts files in different location, you need to tell tsc about it by specifying that that in
 *   typeRoots or in include option.
 * 
 * 2)paths - used to define alias for a path. ex -
 * 
 * {
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}
 * 
 */
