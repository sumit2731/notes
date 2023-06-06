/* 
Until now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.

In this chapter we’ll study additional configuration options, and in the next we’ll see how to invisibly turn them into 
    getter/setter functions.

*/

/* 
Property flags

Object properties, besides a value, have three special attributes (so-called “flags”):

    writable – if true, the value can be changed, otherwise it’s read-only.
    enumerable – if true, then listed in loops, otherwise not listed.
    configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
        when false, properties cannot be deleted, flags cannot be changed but we can assign new value of property

We didn’t see them yet, because generally they do not show up. When we create a property “the usual way”, all of them are true. 
But we also can change them anytime.

*/

/* 
reading flags

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

*/

let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));
/* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

/* 
To change the flags, we can use Object.defineProperty.

Object.defineProperty(obj, propertyName, descriptor)

If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in 
    that case, if a flag is not supplied, it is assumed as false. but if flags are already defined once using defineProperty syntax ,
    then there value is inherited from  that defination even if while uisng defineProperty again that flag is not provided.

    For instance, here a property name is created with all falsy flags:
*/

let user2 = {};

Object.defineProperty(user2, "name", {
  value: "John",
});

let descriptor2 = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

/* 
Now let’s see effects of the flags by example.

Non-writable
*/

let user3 = {
  name: "John",
};

Object.defineProperty(user3, "name", {
  writable: false,
});

user3.name = "Pete"; // Error: Cannot assign to read only property 'name'

/* 
Now no one can change the name of our user, unless they apply their own defineProperty to override ours.

In non-strict mode, no errors occur when writing to non-writable properties and such. But the operation still won’t succeed. 
Flag-violating actions are just silently ignored in non-strict.

Here’s the same example, but the property is created from scratch:
*/

let user4 = {};

Object.defineProperty(user4, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true,
});

console.log(user4.name); // John
user4.name = "Pete"; // Error

/* 
Non-enumerable - properties are skipped in for in loop and Object.keys
*/

/* 
Non-configurable

Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

There’s a minor exception about changing flags.

We can change writable: true to false for a non-configurable property, thus preventing its value modification (to add another layer
    of protection). Not the other way around though.
*/

let user5 = {
  name: "John",
};

Object.defineProperty(user5, "name", {
  configurable: false,
});

user5.name = "Pete"; // works fine
delete user5.name; // Error

/* 
And here we make user.name a “forever sealed” constant, just like the built-in Math.PI:
*/
let user6 = {
  name: "John",
};

Object.defineProperty(user6, "name", {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:
user6.name = "Pete";
delete user6.name;
Object.defineProperty(user6, "name", { value: "Pete" });

//Object.defineProperties

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2,
  // ...
});

Object.defineProperties(user7, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

//Object.getOwnPropertyDescriptors

Object.getOwnPropertyDescriptors(obj);

//Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

/*

Normally when we clone an object, we use an assignment to copy properties, like this:

for (let key in user) {
  clone[key] = user[key]
}

…But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.

Another difference is that for..in ignores symbolic and non-enumerable properties, but Object.returns all 
property descriptors including symbolic and non-enumerable ones.

*/

/* 
API's -

Object.getOwnPropertyDescriptor(obj, propertyName)

Object.defineProperty(obj,propertyName,descriptor)

Object.getOwnPropertyDescriptors(obj)
Object.defineProperties(obj, propertiesDescriptors),

Object.preventExtensions(obj) - cannot add new properties
Object.seal(obj) - cannot add/remove properties. and for all properties congigurable flag is set false.
Object.freeze(obj) - canot add/remove/change properties. for existing properties configurable and writable flag is set to false.



*/
