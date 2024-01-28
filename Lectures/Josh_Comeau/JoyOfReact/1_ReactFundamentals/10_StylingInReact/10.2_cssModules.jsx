/**
 * CSS Modules - how they work
 *
 * how they make sure that class name is unique by using path to file name as prefix to className.
 */

/**
 * Learn about webpack in here - https://courses.joshwcomeau.com/joy-of-react/11-tools-of-the-trade/07-webpack
 *
 * babel(transpiler) vs webpack(bundler)
 *
 * transpilers(bable) - converts a jsx or ts file into browser friendly js(no cutting edge js)
 *
 * bundlers(webpack, browserfy)
 *
 * webpack uses babel to conversion, then bundles are files togather into one single large file, which
 *  can be downloaded by browser.as it is building the file, it will take advantage of all the tools
 *  that we talked about.so it uses babel as it is going to convert each file into browser friendly js.
 * it will do eslint linting, it will do all the stuff that would expect in build process.webpack is
 * synchronizing and orchestrating all of this stuff.
 *
 * It's not just copy pasting the things, it do other stuffs also -
 *
 * a)In modules you cannot access variables that you have declared in one file to be avalible in other
 * file, but since webpacks packs it into one single file, it should be avalible. It creates little
 * functions for everything and it manages the dependencies with this idea of dependecy injection.
 * It means if we import something into a file then code in that file will have access to all these
 * dependencies(all imports), all this managed by a complex algorithm.
 * 
 *Nowadays it actually generates multiple bundles, in next.js for example for each route there will be
 *different bundle,it is also smart enough to pluck out these kinds of shared dependencies.React is
 imported in different pages, so rather than user downloads multiples copies of react as he goes through
 the page, it will split it into its own bundle, a common bundle for things that are shared across
 different pages.
 *
 * importng assets - (this is not valid js)
 * import catSrc from '../../assets/cat.jpg';
 * 
 * webpack converts it into this  -  
const catSrc = '/public/assets/cat-a1b2c3.jpg';

Similarly, Webpack lets us import CSS files, SVG files, all sorts of stuff!

other bundlers - turbopack and esbuild
 * 
 * 
 */
