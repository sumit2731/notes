/* 
instanceof operator -
    obj instanceof Class
    It returns true if obj belongs to the Class or a class inheriting from it. it works for classes as well as constructor functions.
    It also works in case of built in classes like Arrays and Functions.

    It’s funny, but the Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.
*/

let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true

/* 
The algorithm of obj instanceof Class works roughly as follows:
    1)If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either 
        true or false,and we’re done. That’s how we can customize the behavior of instanceof.

    2)Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether 
        Class.prototype is equal to one of the prototypes in the obj prototype chain.
*/

/* 
Bounus: Object.prototype.toString fro the type

    we can store Object.prototype.toString function in the separate variable and now call it with diffrent datatypes like
    array,Boolean,null,undefined. it returns diffrent value for each datatype.

    normally each datatype has its own implementation of toString method. but we want to use one that is define on Object.prototype.
    As you can see, the result is exactly Symbol.toStringTag (if exists), wrapped into [object ...].

    We can use {}.toString.call instead of instanceof for built-in objects when we want to get the type as a string rather than just to check.

*/

/* 
Symbol.toStringTag

*/

let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]



/* 
API -
    static [Symbol.hasInstance]
    objA.isPrototypeOf(objB),
    [Symbol.toSyringTag]

*/