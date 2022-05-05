/* 
Named Exports
*/

/* 
    export while declaration
*/
export const MODULES_BECAME_STANDARD_YEAR = 2015;

/* 

    export after declaration
*/

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

/**
 * @Desc a list of exported variables, this statement can also be moved to top. this is wrong syntax -
 *  export sayHi;
 */
export {sayHi, sayBye}; // 


/**
 * @Desc export as syntax. now in imorting file you have to use name hi and bye.
 * sayHi and sayBye is not avalible there
 */

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi as hi, sayBye as bye};


/**
 * @Default export. there can be one default export from a file. this is for idea - "one thing per module”
 * devs do not prevfer it -
 *   a)devs can use different names while importing, which leads to confusion.
 *   b) need to handle default exports diffrently in  "export {} from" syntax
 *  
 */

/**
 * @Syntax1 - default export while declaration
 */

 export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
}
/**
 * @Syntax 2 - default export while decalation without giving name.
 * As there may be at most one default export per file, the exported entity may have no name.
 */

 export default class  { // just add "default"
    constructor(name) {
        this.name = name;
    }
}

export default function () {

}
//export a single value, without making a variable
export default [1,2,3];

/**
 * @Syntax 3 - default export after declaration.
 */

function f1() {}

export default f1;


/**
 * @Syntax4 export using 'as defualt syntax';
 */

 function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  const abc = 1;
  const ab = 2;
  // same as if we added "export default" before the function
  export {sayHi as default, abc, ab as xy};

  //or

  export default sayHi;

  export {abc};

  export {ab as xy};




