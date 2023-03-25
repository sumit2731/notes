/**
 * The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
 */

let user = {}; // user has no address

console.log(user?.address?.street); // undefined (no error)
/**
 * Please note: the ?. syntax makes optional the value before it, but not any further.
 */

/**
 * Don’t overuse the optional chaining
 *  We should use ?. only where it’s ok that something doesn’t exist.if we overuse ?., coding errors can be silenced where not
 *   appropriate, and become more difficult to debug.
 */

/**
 * The variable before ?. must be declared
 */

// ReferenceError: user2 is not defined
user2?.address;

/**
 * @ShortCircuiting - the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.
 *
 * So, if there are any further function calls or operations to the right of ?., they won’t be made.
 */

let user3 = null;
let x = 0;

user3?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented

/**
 * Other variants: ?.(), ?.[]
 *
 * ?.() is used to call a function that may not exist.
 * Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists,
 * so it’s safe read from it.
 *
 * Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest)
 * the evaluation stops without errors.
 */

let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.();

userGuest.admin?.();

/**
 * Using Optional chnaing with dynamic properties
 *
 * The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it
 *  allows to safely read a property from an object that may not exist.
 */

let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

/**
 * Optional Chaining can also be used with delete operator.
 *
 * deleteing a property on object that may not exist
 */

let user4;

delete user4?.name; // delete user.name if user exists


/**
 * We can use ?. for safe reading and deleting, but not writing. The optional chaining ?. has no use on the left side of an 
 *  assignment.
 */

let user5 = null;

user5?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
