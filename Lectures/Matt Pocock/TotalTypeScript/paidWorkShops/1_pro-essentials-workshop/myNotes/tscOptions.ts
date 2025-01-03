/**
 * 1)--project
 *   we can mention the path of tsconfig using this option -
 *    tsc --project ./src/client/tsconfig.json
 *
 * 2)--listFiles
 * see which files are targetted by tsconfig
 *   tsc --listFiles
 *
 * 3)--build or --b
 * run tsc in build option, you can use --force to rebuild all projects
 *    tsc --b
 *  when run in build mode -
 *   a)It runs all of mentioned refrences also, in normal mode it does not run refrences.
 *   b)it enables incremental builds by generating tsconfig.tsbuildinfo file, so only files which
 *      are changed are compiled again.
 *
 * 4)--verbose
 *   Use --verbose to debug the build process.
 */
