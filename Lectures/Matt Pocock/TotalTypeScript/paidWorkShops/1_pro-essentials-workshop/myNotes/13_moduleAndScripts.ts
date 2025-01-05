/**
 * 159- If no import-export is their, then it is treated as script.
 *  it means anything you define their is avalaible globally, so
 *  it can be used in another files.
 * 160- moduleDetection: option in tsconfig that changes this default behaviour.
 *  possible values - auto, force.
 *  auto - default
 *  force - treat all files as modules irrespective of presence of import/export statement.
 *  this option is only applied to normal ts files, d.ts files will be treated a scripts if no
 *   import/export is avalible
 *
 *
 * 161-things that i know about d.ts files
 *   a)they can only contain type code, no run time code should be present.
 *   b)scope inside declaration files is called ambient context.
 *   see comments in code
 * 162 -moduleDetection: force, only makes .ts or tsx files as module files.
 *  d.ts files can be still module or local scripts, depending upon whether you have
 *  import/export statement in them or not.In last lesson declartion files are treated as module
 *  that means you need to import types from them in order to use those types.in other words
 *  those are not globally avalible. Anything declared in d.ts files will be avalible globally if
 *  d.ts file is script.
 *
 * 164 - Here we had a js file, we defined the declaration file for it , so that it can be used in
 *  typescript.how you ship JavaScript files in NPM while still having them be compatible with your
 *  TypeScript project.see notes in solution.
 *
 * 166 - here we declared a constant in type system which will be provided in run time by some
 *  script.we use 'declare' keyword in normal file.since 'declared' keyword was used in module file, it is avalible
 *  only in this file. see comments in file
 *
 * 167 - same as previous one, but here we want to have declaration avalaible globally.
 *  there are 2 solutions
 *   a)in normal ts file(because of tsconfig all normal ts files are treated as modules now), we can use declare
 *     global syntax to put something in global context.
 *   b)we create a d.ts files which is treated a script and not module,then using 'declare' keyword we declare
 *    something, as this is script file, now it is avalaible globally.
 */
