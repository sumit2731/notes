/**
 * 159- If no import-export is their, then it is treated as script.
 *  it means anything you define their is avalaible globally, so
 *  it can be used in another files.
 * 160- moduleDetection: option in tsconfig that changes this default behaviour.
 *  possible values - auto, force.
 *  auto - default
 *  force - treat all files as modules irrespective of presence of import/export statement.
 *
 * 161-things that i know about d.ts files
 *   a)they can only contain type code, no run time code should be present.
 * 162 -moduleDetection: force, only makes .ts or tsx files as module files.
 *  d.ts files can be still module or lobal scripts, depending upon whether you have
 *  import/export statement in them or not.
 *
 * 164 - Here we had a js file, we defined the declaration file for it , so that it can be used in
 *  typescript.
 *
 * 166 - here we declared a constant in type system which will be provided b=in run time by some
 *  script
 *
 * 167 - same as previous one, but here we want to have declaration avalaible globally.
 *  there are 2 solutions
 */
