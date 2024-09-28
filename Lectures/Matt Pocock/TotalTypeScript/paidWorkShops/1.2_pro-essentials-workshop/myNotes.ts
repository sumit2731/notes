/**
 * 31 - Alternate tupple syntax
 * 32 0- Optional Tupples
 *
 * 34- function that has void return type, can return something, but that type will be ignored
 */

/**
 * @Desc tsc build process
 *
 * 11- Setting ts compiler locally
 *      npm i --global typescript
 *      tsc --version
 *      tsc --init (creates tsconfig.json)
 *      tsc (converts all ts files into js)
 *
 * 12 - Automating ts compilation process
 *
 *      in watch mode -
 *        tsc --watch
 *
 * 13 - Compiling ts file to directory
 *
 *        in tsconfig.json -
 *          "outDir": "./dist",
 *
 * 14 - setting up a simple frontend project with vite
 *     npm create vite@latest my-first-app
 *     then follow the steps and select basic app and tsc
 *
 * 15 @imp  - comparing vite with tsc
 *     In vite project we are not using ts cli to compile js to ts.we saw that in vite project of we run tsc , we do not see any js file, why is this?
 *     this is because of "noEmit: true" option in tsconfig.json. this is because vite does not use
 *      tsc to compile js to ts, it uses esbuild which is faster than tsc
 */

/**
 * IDE Superpowers
 *
 *
 * 40 - hovering over different paths in nested object notation
 * 41 - hovering over different paths in nested object notationa.b.c.d
 */
