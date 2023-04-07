/* 
Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated (moved to the so-called “Annex B” 
        of the JavaScript standard, meant for browsers only).

    The modern methods to get/set a prototype are:
        Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
        Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto

    The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }.

    Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
*/

/* 
The Object.create method is a bit more powerful, as it has an optional second argument: property descriptors.
*/

let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.jumps); // true

/* 
We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
*/

let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

/* 
Why was __proto__ replaced by the functions getPrototypeOf/setPrototypeOf?

Why was __proto__ partially rehabilitated and its usage allowed in {...}, but not as a getter/setter?

That’s an interesting question, requiring us to understand why __proto__ is bad.

*/

/* 
Don’t change [[Prototype]] on existing objects if speed matters.

The __proto__ property is special: it must be either an object or null. A string can not become a prototype. That’s why an assignment
a string to __proto__ is ignored.
*/
