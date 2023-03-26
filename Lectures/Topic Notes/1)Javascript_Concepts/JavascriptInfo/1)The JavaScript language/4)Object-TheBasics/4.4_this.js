/**
 * shorter syntax for methods in an object literal:
 */

// these objects do the same

user1 = {
  sayHi: function () {
    alert("Hello");
  },
};

// method shorthand looks better, right?
user2 = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert("Hello");
  },
};

/**
 * To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance
 * (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred.
 */

/**
 * It’s common that an object method needs to access the information stored in the object to do its job.
 *
 * To access the object, a method can use the "this" keyword.The value of this is the object “before dot”, the one used to
 *  call the method.
 *
 * Why we shoud use this to access properties of objects
 */
let user3 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(user3.name); // leads to an error
  },
};

let admin3 = user3;
user3 = null; // overwrite to make things obvious

admin3.sayHi(); // TypeError: Cannot read property 'name' of null

/**
 * The value of this is evaluated during the run-time, depending on the context.
 *For instance, here the same function is assigned to two different objects and has different “this” in the calls:

 In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but 
 * rather on what object is “before the dot”.
 */

/**
 * values of this in function which is called without object
 *
 * We can even call the function without an object at all:
 * 
 * In this case this is undefined in strict mode. If we try to access this.name, there will be an error.
 
 *In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the 
  chapter Global object). This is a historical behavior that "use strict" fixes.
 
 *Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.
 */

function sayHi() {
  console.log(this);
}

sayHi(); // undefined

/**
 * Arrow functions have no “this”
 * 
 * Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the 
 * outer “normal” function.

 *For instance, here arrow() uses this from the outer user.sayHi() method:

 *That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take
 *  it from the outer context.
 */

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya
