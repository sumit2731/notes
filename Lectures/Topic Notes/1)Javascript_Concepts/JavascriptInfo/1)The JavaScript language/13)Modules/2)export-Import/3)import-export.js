/**
 * @export ... from ..... syntax means import something just to import it.
 * used when we want end user to import everything from one place. we can also chnage name while
 * exporting by uisng 'as' syntax. syntax -
 * 
    export {x [as y], ...} from "module"
    export * from "module" (doesn’t re-export default).
    export {default [as y]} from "module" (re-export default).
 * 
 * 
 * 
 * 
 * exporting things without using "export as" syntax -
 */

// import login/logout and immediately export them
import { login, logout } from "./helpers.js";
export { login, logout };

// import default as User and export it
import User from "./user.js";
export { User };

/**
 * @The syntax export ... from ... is just a shorter notation for such import-export:
 * The notable difference of export ... from compared to import/export is that re-exported modules aren’t available in the current file
 */

/**
 * @exporting named exports
 */

export { sayHi } from "./say.js"; // re-export sayHi

/**
 * @exporting default exports
 */

export { default as User } from "./user.js";

export { default as User, sayHI } from "./user.js";

/**
 * Re-exporting default export - We can come across two problems with it:
 * 
 * 1)export User from './user.js' won’t work. That would lead to a syntax error.

    To re-export the default export, we have to write export {default as User}, as in the example above.

    2)export * from './user.js' re-exports only named exports, but ignores the default one.

        If we’d like to re-export both named and default exports, then two statements are needed:

        export * from './user.js'; // to re-export named exports
        export {default} from './user.js'; // to re-export the default export


Such oddities of re-exporting a default export are one of the reasons why some developers don’t like default exports and prefer named ones.
 */
