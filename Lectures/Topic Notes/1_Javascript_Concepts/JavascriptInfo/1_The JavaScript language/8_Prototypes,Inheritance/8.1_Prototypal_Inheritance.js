/* 
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references
    another object. That object is called “a prototype”.

When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is 
    called “prototypal inheritance”. And soon we’ll study many examples of such inheritance,

The property [[Prototype]] is internal and hidden, but there are many ways to set it.One of them is to use the special name __proto__, like this:

*/
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
/* 
The prototype chain can be longer:

*/

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

/* 
  
There are only two limitations:
    The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
    The value of __proto__ can be either an object or null. Other types are ignored.

Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.
*/

/* 
__proto__ is a historical getter/setter for [[Prototype]]

It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll
 see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use 
    Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.

By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side 
    support __proto__, so we’re quite safe using it.
    
As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.

*/

/* 
Writing doesn’t use prototype

    The prototype is only used for reading properties.Write/delete operations work directly with the object.

*/

let animal2 = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit.walk = function () {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce! From now on, rabbit.walk() call finds the method immediately in the object and executes it, without using the prototype:
/* 

Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the 
    same as calling a function.For that reason admin.fullName works correctly in the code below:
*/
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

/* 
The value of “this”

No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

As a result, methods are shared, but the object state is not.

*/

/* 
API -

obj.hasOwnProperty(key)
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, prototype)
obj.__proto__

difference between [[Prototype]], __proto__ and prototype
*/
