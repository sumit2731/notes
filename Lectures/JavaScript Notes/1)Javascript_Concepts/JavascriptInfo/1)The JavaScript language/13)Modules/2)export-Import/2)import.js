/**
 * Syntax -
 
*  Importing named exports:
      
      import {x [as y], ...} from "module";

*  Importing the default export: - 

      import x from "module"
      import {default as x} from "module"

*  Import all:
      import * as obj from "module"


*  import the module (its code runs), but do not assign any of its exports to variables:
    import "module"
 */

/**
 * @Desc Named Import Syntax
 * @Simple Named Import
 */
import {sayHi, sayBye} from './say.js';

/**
 * @Importing everything in single statement. disdvantage -
 * At first sight, “import everything” seems such a cool thing, short to write, why should we ever explicitly list what we need to import?
    Modern build tools (webpack and others) bundle modules together and optimize them to speedup loading and remove unused stuff.
 */

import * as say from './say.js';

    say.sayHi('John');
    say.sayBye('John');


/**
 * @Import as syntax - you can asisgn alias to imports.
 */

import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!


/**
 * @Importing default exports - There is only one export default per file.
   import it without uisng curly braces. you can use any name for default import.
 */

import User from './user.js'; // not {User}, just User

new User('John');


/**
 * @Importing both default and named exports -
 */

import Person,{abc, xyz} from './hello.js';

/**
 * @desc Accessing default export in import * as syntax
 */

import * as user from './users.js';

user.default();
