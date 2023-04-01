/* 
Export before declarations
*/
// export an array
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

/* 
Export apart from declarations
*/

// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables, …Or, technically we could put export above functions as well.

//Import

// 📁 main.js
import { sayHi2, sayBye2 } from "./say.js";

sayHi2("John"); // Hello, John!
sayBye2("John"); // Bye, John!

/* 
But if there’s a lot to import, we can import everything as an object using import * as <obj>, for instance:
*/

// 📁 main.js
import * as say from "./say.js";

say.sayHi("John");
say.sayBye("John");

/* 
At first sight, “import everything” seems such a cool thing, short to write, why should we ever explicitly list what we need to 
  import?

Well, there are few reasons.

  a)Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi().
  b)Explicit list of imports gives better overview of the code structure: what is used and where. It makes code support and 
    refactoring easier.

  Don’t be afraid to import too much

    Modern build tools, such as webpack and others, bundle modules together and optimize them to speedup loading. They also removed
    unused imports.

    For instance, if you import * as library from a huge code library, and then use only few methods, then unused ones will not be
    included into the optimzed bundle.

*/

/* 
Import “as”

We can also use as to import under different names.
*/

// 📁 main.js
import { sayHi as hi, sayBye as bye } from "./say.js";

hi("John"); // Hello, John!
bye("John"); // Bye, John!

/* 
Export “as”
*/

// 📁 say.js
export { sayHi as hi, sayBye as bye };

// Now hi and bye are official names for outsiders, to be used in imports:
// 📁 main.js
import * as say from "./say.js";

say.hi("John"); // Hello, John!
say.bye("John"); // Bye, John!

/* 
Export default

  In practice, there are mainly two kinds of modules.

    a)Modules that contain a library, pack of functions, like say.js above.
    b)Modules that declare a single entity, e.g. a module user.js exports only class User.
  
  Mostly, the second approach is preferred, so that every “thing” resides in its own module.

  Naturally, that requires a lot of files, as everything wants its own module, but that’s not a problem at all. Actually, code 
  navigation becomes easier if files are well-named and structured into folders.

  Modules provide a special export default (“the default export”) syntax to make the “one thing per module” way look better.
  There may be only one export default per file.

  Put export default before the entity to export:

*/

// 📁 user.js
export default class User {
  // just add "default"
  constructor(name) {
    this.name = name;
  }
}

/* 
…And then import it without curly braces:
*/

// 📁 main.js
import User from './user.js'; // not {User}, just User
new User('John');

/* 
Imports without curly braces look nicer.

Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module
  has either named exports or the default one.

As there may be at most one default export per file, the exported entity may have no name.

For instance, these are all perfectly valid default exports:

*/

export default class { // no class name
  constructor() { ... }
}

export default function(user) { // no function name
  alert(`Hello, ${user}!`);
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


/* 
Not giving a name is fine, because there is only one export default per file, so import without curly braces knows what to import.

Without default, such an export would give an error:
*/

export class { // Error! (non-default export needs a name)
  constructor() {}
}

/* 
The “default” name
  useCase 1 - For example, to export a function separately from its definition:
*/

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export {sayHi as default};

/* 
  useCase 2 - let’s say a module user.js exports one main “default” thing, and a few named ones. (rarely the case, but it happens):
*/

// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// Here’s how to import the default export along with a named one:

// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');

// And, finally, if importing everything * as an object, then the default property is exactly the default export:


// 📁 main.js
import * as user from './user.js';

let User = user.default; // the default export
new User('John');


/* 
A word against default exports

Named exports are explicit. They exactly name what they import, so we have that information from them; that’s a good thing.

Named exports force us to use exactly the right name to import:
*/

import {User} from './user.js';
// import {MyUser} won't work, the name must be {User}

// …While for a default export, we always choose the name when importing:

import User from './user.js'; // works
import MyUser from './user.js'; // works too


/* 
So team members may use different names to import the same thing, and that’s not good.

Usually, to avoid that and keep the code consistent, there’s a rule that imported variables should correspond to file names, e.g:

could be import Anything... and it'll still work

*/

import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';


/* 
Still, some teams consider it a serious drawback of default exports. So they prefer to always use named exports. Even if only a 
  single thing is exported, it’s still exported under a name, without default.

That also makes re-export (see below) a little bit easier.
*/


/* 
Re-export

“Re-export” syntax export ... from ... allows to import things and immediately export them (possibly under another name), like this:
*/

export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default


/* 
why we would like to do this - see blog

  The notable difference of export ... from compared to import/export is that re-exported modules aren’t available in the current file.
  So inside the above example of auth/index.js we can’t use re-exported login/logout functions.
*/

/* 
Re-exporting the default export

  a)export User from './user.js' won’t work. That would lead to a syntax error.
    To re-export the default export, we have to write export {default as User}, as in the example above.

  b)export * from './user.js' re-exports only named exports, but ignores the default one.
    If we’d like to re-export both named and default exports, then two statements are needed:

*/

export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export, this is also exported as default export from this module.this willbe imported like this -

import hello from "./index.js";


//see summary, it combines everything


/* 
We can put import/export statements at the top or at the bottom of a script, that doesn’t matter.

So, technically this code is fine:

*/

sayHi();

import {sayHi} from './say.js'; // import at the end of the file


/* 
Please note that import/export statements don’t work if inside {...}.
A conditional import, like this, won’t work:
*/

if (something) {
  import {sayHi} from "./say.js"; // Error: import must be at top level
}

/* 
…But what if we really need to import something conditionally? Or at the right time? Like, load a module upon request, when it’s really needed?

We’ll see dynamic imports in the next article.

*/