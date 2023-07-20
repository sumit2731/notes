// create a function and immediately call it with new
let user2 = new function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

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

let user4 = new User; // <-- no parentheses
// same as
let user4 = new User();

//To create complex objects, there’s a more advanced syntax, classes, that we’ll cover later.
