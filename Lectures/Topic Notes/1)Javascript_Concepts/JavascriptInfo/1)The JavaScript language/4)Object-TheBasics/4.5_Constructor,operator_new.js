/**
 * When a function is executed with new, it does the following steps:
    a)A new empty object is created and assigned to this.
    b)The function body executes. Usually it modifies this, adds new properties to it.
    c)The value of this is returned.

 * In other words, new User(...) does something like:
 */

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

//So let user = new User("Jack") gives the same result as:

let user1 = {
  name: "Jack",
  isAdmin: false,
};

/* 
Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor.
using new wit arrow function throws a error - "functionName" is not a constructor


new function() { … }

If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor
function, like this:

This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate 
the code that constructs the single object, without future reuse.

*/

// create a function and immediately call it with new
let user2 = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();

/**
 * Constructor mode test: new.target
 *
 * Inside a function, we can check whether it was called with new or without it, using a special new.target property.
 *
 * It is undefined for regular calls and equals the function if called with new:
 */

function User() {
  console.log(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

/* 
Return from constructors

    Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically 
    becomes the result.

    But if there is a return statement, then the rule is simple:

    If return is called with an object, then the object is returned instead of this.
    If return is called with a primitive, it’s ignored.
*/

/* 
Omitting parentheses
*/

let user4 = new User(); // <-- no parentheses
// same as
let user4 = new User();

//To create complex objects, there’s a more advanced syntax, classes, that we’ll cover later.
