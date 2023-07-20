
/**
 * For multiword properties, the dot access doesn’t work:
 * 
 * The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and 
 * doesn’t include special characters ($ and _ are allowed).
 * 
 * There’s an alternative “square bracket notation” that works with any string:
 */

// this would give a syntax error
user1.likes birds = true // gives error

let user2 = {};

// set
user2["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user2["likes birds"];


/**
 * Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal 
 * string – like from a variable as follows:
 */

let key = "likes birds";

// same as user["likes birds"] = true;
user2[key] = true;

/**
 * Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That
 * gives us a great deal of flexibility.
 */

let user3 = {
    name: "John",
    age: 30
  };
  
let key3 = prompt("What do you want to know about the user?", "name");
  
// access by variable
console.log( user3[key3] ); // John (if enter "name")

/**
 * 
 * Computed properties - We can use square brackets in an object literal, when creating an object. That’s called computed properties.
 */
let fruit1 = prompt("Which fruit to buy?", "apple");

let bag1 = {
  [fruit1]: 5, // the name of the property is taken from the variable fruit
};

let user4 = {
    [key3]: "any value"
}

//We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

/**
 * Property names limitations
 * 
 * As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
    But for an object property, there’s no such restriction:

 * In short, there are no limitations on property names. They can be any strings or symbols .Other types are automatically 
        converted to strings.
 */

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
console.log( obj.for + obj.let + obj.return );  // 6


/**
 * There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value.
 * We’ll cover the special nature of __proto__ in subsequent chapters, and suggest the ways to fix such behavior.
 */
  
let obj2 = {};
obj2.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

/**
 * Property existence test, “in” operator
 * 
 * Please note that on the left side of in there must be a property name. That’s usually a quoted string.
    If we omit quotes, that means a variable should contain the actual name to be tested. For instance:
 */

let user5= { name: "John", age: 30 };

console.log( "age" in user5 ); // true, user.age exists
console.log( "blabla" in user5 ); // false, user.blabla doesn't exist


/**
 * Ordered like an object - Are objects ordered? In other words, if we loop over an object, do we get all properties in the same 
 * order they were added? Can we rely on this?
 * 
 * The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details 
 * follow.
 */

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

/**
 * solution to above propblem is we can use non integar properties like +49 (or add decimal like 49.1) and then iterate over them in
 * for in loop, there they will follow the natural order of addition
 */