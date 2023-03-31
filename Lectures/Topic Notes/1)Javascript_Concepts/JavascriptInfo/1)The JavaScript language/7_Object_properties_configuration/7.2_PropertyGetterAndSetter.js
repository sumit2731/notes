/* 
There are two kinds of object properties.
    data properties -All properties that we’ve been using until now were data properties.
    accessor properties - They are essentially functions that execute on getting and setting a value, but look like regular 
      properties to an external code.

Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set.
The getter works when obj.propName is read, the setter – when it is assigned.
*/

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

/* 
we have a user object with name and surname.Now we want to add a fullName property, that should be "John Smith". Of course, we don’t
    want to copy-paste existing information, so we can implement it as an accessor.

From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName
as a function, we read it normally: the getter runs behind the scenes.


*/

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user.fullName); // John Smith

/* 
As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:
Let’s fix it by adding a setter for user.fullName:
*/

let user2 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
user2.fullName = "Alice Cooper";

console.log(user2.name); // Alice
console.log(user2.surname); // Cooper

/* 
Accessor descriptors

    Descriptors for accessor properties are different from those for data properties.For accessor properties, there is no value or
    writable, but instead there are get and set functions.

    That is, an accessor descriptor may have:

        get – a function without arguments, that works when a property is read,
        set – a function with one argument, that is called when the property is set,
        enumerable – same as for data properties,
        configurable – same as for data properties.

*/

let user3 = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user3, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user3.fullName); // John Smith

for (let key in user) console.log(key); // name, surname

/* 
Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
If we try to supply both get and value in the same descriptor, there will be an error:
*/

// Error: Invalid property descriptor.
Object.defineProperty({}, "prop", {
  get() {
    return 1;
  },

  value: 2,
});

/* 
Smarter getters/setters

Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate 
    property _name:

Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that 
  properties starting with an underscore "_" are internal and should not be touched from outside the object.

*/

let user4 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user4.name = "Pete";
console.log(user.name); // Pete

/* 
Using for compatibility

One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it 
with a getter and a setter and tweak its behavior. Imagine we started implementing user objects using data properties name and age:
*/

function User5(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User5("John", 25);

console.log(john.age); // 25

/* 
…But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:
*/

function User6(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john2 = new User6("John", new Date(1992, 6, 1));

/* 
Now what to do with the old code that still uses age property?

We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people.
 And besides, age is a nice thing to have in user, right?

Let’s keep it.

Adding a getter for age solves the problem:
*/

function User7(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john3 = new User7("John", new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age);
