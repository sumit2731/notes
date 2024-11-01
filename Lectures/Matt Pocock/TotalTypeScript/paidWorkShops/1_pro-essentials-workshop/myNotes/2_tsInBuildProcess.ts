/**
 * @Desc tsc build process
 *
 * 11- Setting ts compiler locally
 *      npm i --global typescript
 *      tsc --version
 *      tsc --init (creates tsconfig.json)
 *      tsc (converts all ts files into js)
 *
 * 12 - Automating ts compilation
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
 *      vite has great typecsript support and works out of box with typecsript without any addiitonal config.
 *
 * 15 @imp  - comparing vite with tsc (only lecture notes)
 *     In vite project we are not using ts cli to compile js to ts.we saw that in vite project if we run tsc , we
 *        do not see any js file, why is this?this is because of "noEmit: true" option in tsconfig.json. if we
 *        remove this config and then do tsc we see js files generated.
 *
 *      Why we have this "noEmit: true", this is bceuase because inside vite projecy, vite is now handling the
 *          actual bundling, turning ts code in js."noEmit: true", say to ts cli that we do not need you anymore or
 *          rather we do not need you to produce js files.questions is why we need ts complier at all? well vite actually
 *          itself doe;nt actually do any type checking for you.vite uses esbuild(alternative to ts compiler) to
 *          convert ts into js. so even even if there are some error in our ts code, vite will still convert it
 *          into js. which means it is faster than ts cli, because ts cli also has to do type checking,and then
 *          convert yur code.while vite cli just converts your cod einto js which is lot easier than type checking.
 *
 *      so we need ts cli to type check our project.if we make a masitake in code, we will get error in cli, but
 *       your code is still compiled by vite. so ts cli is used more like a linter here than  an actual build
 *       process here.this is how it is used in most expecially frontend projects.sometimes while working with node
 *       you need to use tsc yourself to turn your code in to js manually.but if use vite, next, astro ,remix than
 *       you are going to use tsc more as a linter, and will have "noEmit: true"
 *
 * 16 - ts on ci system
 *    here it was explained how ts is used on ci/cd system to catch errors early, by running it just for type
 *      checking. so in CI?CD we write run - tsc, which runs ts compliter as linter. so tsc can be used as
 *      build tool or linter.
 *
 * 17 - should you block compilation of your code if you get some error in ts code?
 *      matt thinks you should not.because ts does not run in browser
 *      explainer 2 - shows solution where you are blocking the the dev server, see vite.config.
 *      explainer 3 - shows the setup, where you are not blocking the dev server becauase of ts errors,
 *          but those error are still shown in terminal.
 *          see package.json. here see dev script, it run all scripts strating with dev, it uses "npm-run-all" package '
 *              for this.
 *
 *
 * 19 - this shows, how you can run a local ts code with nodejs quickly using package called tsx.
 *  It runs esbuild on top of ts files and that bundles them into js files.then it runs those js files.
 *  It does this really fast and does not do any typechecking. see do-something script in package.json
 */

/**
 * To be seen again - 15,17
 *
 */
