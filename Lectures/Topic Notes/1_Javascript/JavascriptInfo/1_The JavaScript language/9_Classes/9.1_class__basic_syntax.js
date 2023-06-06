/* 
Synopsis -

    a)Class Syntax
    b)Behind the hood, Class is converted to function which is invoked in contructor mode to create objects. 
        typeof className => "function"
            a)code in constructor becomes code of that defined function.
            b)methods of class are created on prototype of this function.
            c)instance proeprties are not created on prototype, they are created on individual objects.
            d)getters/setters are added on prototype.
    c)How class is not just synthetic sugar for function in constructor mode.
        a)It has additional property [[IsClassConstructor]]: true.The language checks for that property in a variety of places. for ex -
            a)function should always be called with new keyword. otherwise it throws error.
            b)Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”.
        b)Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
            That’s good, because if we for..in over an object, we usually don’t want its class methods.
        c)classes always use strict.All code inside the class construct is automatically in strict mode.
        d)top-down vs bottom up approach - https://forum.kirupa.com/t/js-tip-of-the-day-super-defines-this/643157/1
    d)Class Expression - we can store class experssion in varables like function.
        1)named class expressions. class names of named class expressions are visisble only inside class.
        2)creating classes on the demand. we can return class expression from function and use it.
    e)getters/setters in class - they are also created in  Class.prototype
    f)Computed method names […]
        name of methods can be dynamic i.e it can be a function call, or any other js expression.
    g)class fields - these are new additions, old browsers may need polyfills
        They are added on individual objects not prototype.values to these class fields can be assigned with complex expressions.
        and these complex expression are executed each time a object is created.

    h)Making bound methods with class fields

        setTimeout(obj1.method, 1000);
        
        bound methods means locking the value of this
            1)use wrapper function
                setTimeout(() => obj1.method(), 1000)
            2)bind the method to object in contructor
                construtor() {
                    //here we can access all class fields
                    this.method = this.method.bind(this);
                }
            3)use arrow functions to store values in class fields

*/

/* 
Special Properties -
    a function created by class is labelled by a special internal property [[IsClassConstructor]]: true

*/



/* 
class MyClass {
    // class methods
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
*/

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}

// Usage:
let user = new User("John");
user.sayHi();

/* 
What class User {...} construct really does is:

    1)Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t 
        write such method).
    2)Stores class methods, such as sayHi, in User.prototype.

    here is code to introspect it

*/

class User2 {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// class is a function
console.log(typeof User2); // function

// ...or, more precisely, the constructor method
console.log(User2 === User2.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User2.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User2.prototype)); // constructor, sayHi



/* 
Not Just synthetic sugar, this is how class differs from regular function -

    a)First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. 
        1)So it’s not entirely the same as creating it manually.The language checks for that property in a variety 
            of places. For example, unlike a regular function, it must be called with new:
        2)Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”.

    b)Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
        That’s good, because if we for..in over an object, we usually don’t want its class methods.

    c)Classes always use strict. All code inside the class construct is automatically in strict mode.
    
    Besides, class syntax brings many other features that we’ll explore later.
*/

/* 
Class Expression

*/

let User3 = class {
    sayHi() {
        alert("Hello");
    }
};

/* 
Similar to Named Function Expressions, class expressions may have a name.

If a class expression has a name, it’s visible inside the class only:

*/

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User4 = class MyClass {
    sayHi() {
        alert(MyClass); // MyClass name is visible only inside the class
    }
};

new User4().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class


/* 
Classes on the demnd
*/

function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello


/* 
Getters/setters

Technically, such class declaration works by creating getters and setters in User.prototype.
 
*/

class User5 {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user5 = new User5("John");
alert(user5.name); // John

user = new User(""); // Name is too short.

/* 
Computed names […]

Here’s an example with a computed method name using brackets [...]:

Such features are easy to remember, as they resemble that of literal objects.
*/

class User6 {

    ['say' + 'Hi']() {
        alert("Hello");
    }

}

new User6().sayHi();

/* 
“Class fields” is a syntax that allows to add any properties(apart from methods otber proeprties can also be added).
For instance, let’s add name property to class User.
The important difference of class fields is that they are set on individual objects, not User.prototype:

older browser might need polyfill - Class fields are a recent addition to the language.
*/

class User7 {
    name = "John";

    sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}

new User7().sayHi(); // Hello, John!
alert(user.name); // John
alert(User.prototype.name); // undefined


/* 
We can also assign values using more complex expressions and function calls:

here propt comes each time a new object is created.
*/

class User8 {
    name = prompt("Name, please?", "John");
  }
  
  let user8 = new User8();
  alert(user8.name); // John


/*  
Making bound methods with class fields
*/

