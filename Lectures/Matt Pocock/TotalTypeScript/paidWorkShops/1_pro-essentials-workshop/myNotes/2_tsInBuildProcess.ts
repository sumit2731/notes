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
 * 15 @imp  - comparing vite with tsc (only lecture notes)
 *     In vite project we are not using ts cli to compile js to ts.we saw that in vite project of we run tsc , we do not see any js file, why is this?
 *     this is because of "noEmit: true" option in tsconfig.json. if we remove this config and then do tsc we see js files generated.
 *
 *     so why do we even need ts compiler to convert ts and js , and vite can do it by itself? reason is by default vite does not do any typechecking
 *      for you.vite uses esbuild(alternative to ts compiler) to convert ts into js. so even even if there are some error in our ts code, vite will still
 *       convert it into js. which means it is faster than ts cli, because ts cli also has to do type checking,and then convert yur code.
 *
 *      so we need ts cli to type check our project.if we make a masitake in code, we will get error in cli, but your code is still compiled by vite. so ts
 *       cli is used more like a linter here.this is how it is used in most frontend projects.
 *
 * 16 ts on ci system
 *    here it was explained how ts is used on ci/cd system to catch errors early, by running it just for type checking
 *
 * 17 - should you block compilation of your code if you get some error in ts code?
 *      matt things you should not.because ts does not run in browser
 *      explainer 2 - shows solution where you are blocking the the dev server, see vite.config
 *      explainer 3 - shows the setup, where you are not blocking the dev server becauase of ts errors, but those error are still shown in terminal.
 *            see package.json
 *
 * 19 - this shows, how you can run a local ts code with nodejs quickly using package called tsx.
 *  It sues esbuild to run js code. so it does not do type checking and all.
 */
