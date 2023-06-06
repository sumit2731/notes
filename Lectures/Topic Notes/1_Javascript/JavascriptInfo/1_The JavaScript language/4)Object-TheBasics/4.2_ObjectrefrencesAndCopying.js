/**
 * For Deep cloning (or structural cloning) of object
 */
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

/**
 * The structuredClone method can clone most data types, such as objects, arrays, primitive values.
 *   It also supports circular references, when an object property references the object itself (directly or via a chain or
 *      references).
 *   As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.
 */

let user2 = {};
// let's create a circular reference:
// user.me references the user itself
user2.me = user2;

let clone2 = structuredClone(user2);
console.log(clone2.me === clone2); // true

/**
 * Although, there are cases when structuredClone fails.For instance, when an object has a function property. it throws the error.
 *
 * To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel,
 * take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.
 *
 */
