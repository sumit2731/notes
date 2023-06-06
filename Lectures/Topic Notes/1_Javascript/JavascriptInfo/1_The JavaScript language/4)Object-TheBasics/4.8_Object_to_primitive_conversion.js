/* 
What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives 
    and results in a primitive value.

That’s an important limitation: the result of obj1 + obj2 (or another math operation) can’t be another object!

E.g. we can’t make objects representing vectors or matrices (or achievements or whatever), add them and expect a “summed” object as
the result. Such architectural feats are automatically “off the board”.

So, because we can’t technically do much here, there’s no maths with objects in real projects. When it happens, with rare 
exceptions, it’s because of a coding mistake.

In this chapter we’ll cover how an object converts to primitive and how to customize it.

We have two purposes:

    It will allow us to understand what’s going on in case of coding mistakes, when such an operation happened accidentally.
    
    There are exceptions, where such operations are possible and look good. E.g. subtracting or comparing dates (Date objects). 
        We’ll come across them later.

*/

/* 
Coversion Rules

    1)There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. There exist only numeric and 
        string conversions.
    2)The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be 
        covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between 
        two dates.
    3)As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.


*/

/* 
  Hints - How does JavaScript decide which conversion to apply?

  There are three variants of type conversion, that happen in various situations. They’re called “hints”, as described in the 
    specification:

      a)"string" - For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert.

        // output
        alert(obj);

        // using object as a property key
        anotherObj[obj] = 123;

      b)"number" - For an object-to-number conversion, like when we’re doing maths:

        // explicit conversion
        let num = Number(obj);

        // maths (except binary plus)
        let n = +obj; // unary plus
        let delta = date1 - date2;

        // less/greater comparison
        let greater = user1 > user2;

        Most built-in mathematical functions also include such conversion.


      c)"default" - Occurs in rare cases when the operator is “not sure” what type to expect.
        
        1)For instance, binary plus + can work both with strings (concatenates them) and numbers (adds them). So if a binary plus 
          gets an object as an argument, it uses the "default" hint to convert it.

        2)Also, if an object is compared using == with a string, number or a symbol, it’s also unclear which conversion should be 
          done, so the "default" hint is used.

            // binary plus uses the "default" hint
            let total = obj1 + obj2;

            // obj == number uses the "default" hint
            if (user == 1) { ... };

        3)The greater and less comparison operators, such as < >, can work with both strings and numbers too. Still, they use the 
          "number" hint, not "default". That’s for historical reasons.

      In practice though, things are a bit simpler.All built-in objects except for one case (Date object, we’ll learn it later) 
        implement "default" conversion the same way as "number". And we probably should do the same.
*/

/* 
To do the conversion, JavaScript tries to find and call three object methods:

    Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
        
    
    Otherwise if hint is "string" 
        try calling obj.toString() or obj.valueOf(), whatever exists.
    
    Otherwise if hint is "number" or "default"
        try calling obj.valueOf() or obj.toString(), whatever exists.

*/

/* 
Symbol.toPrimitive

 There’s a built-in symbol named Symbol.toPrimitive that should be used to name the conversion method, like this:

 If the method Symbol.toPrimitive exists, it’s used for all hints, and no more methods are needed.

 Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error.

    For instance, here user object implements it:
*/

obj[Symbol.toPrimitive] = function (hint) {
  // here goes the code to convert this object to a primitive
  // it must return a primitive value
  // hint = one of "string", "number", "default"
};

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000

/* 
toString/valueOf

If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:

    For the "string" hint: call toString method, and if it doesn’t exist or if it returns an object instead of a primitive value,
        then call valueOf (so toString has the priority for string conversions).
    For other hints: call valueOf, and if it doesn’t exist or if it returns an object instead of a primitive value, then call 
        toString (so valueOf has the priority for maths).

Methods toString and valueOf come from ancient times. They are not symbols (symbols did not exist that long ago), but rather 
    “regular” string-named methods. They provide an alternative “old-style” way to implement the conversion.

By default, a plain object has following toString and valueOf methods:

    The toString method returns a string "[object Object]".
    The valueOf method returns the object itself.

    The default valueOf is mentioned here only for the sake of completeness, to avoid any confusion. As you can see, it returns the 
        object itself, and so is ignored. Don’t ask me why, that’s for historical reasons. So we can assume it doesn’t exist.


*/

let user2 = { name: "John" };

console.log(user2); // [object Object]
console.log(user2.valueOf() === user2); // true

/* 
For instance, here user does the same as above using a combination of toString and valueOf instead of Symbol.toPrimitive:
*/

let user3 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

console.log(user3); // toString -> {name: "John"}
console.log(+user3); // valueOf -> 1000
console.log(user3 + 500); // valueOf -> 1500

/* 
Often we want a single “catch-all” place to handle all primitive conversions. In this case, we can implement toString only, 
    like this:
*/

let user4 = {
  name: "John",

  toString() {
    return this.name;
  },
};

console.log(user4); // toString -> John
console.log(user4 + 500); // toString -> John500
console.log(user4 + 500); // toString -> John500

/* 
A conversion can return any primitive type

The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.

There is no control whether toString returns exactly a string, or whether Symbol.toPrimitive method returns a number for the hint 
  "number".

The only mandatory thing: these methods must return a primitive, not an object.


For historical reasons, if toString or valueOf returns an object, there’s no error, but such value is ignored (like if the method 
  didn’t exist). That’s because in ancient times there was no good “error” concept in JavaScript.if both of these reurn object,
  then we get the error.

In contrast, Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error.

*/

/* 
Further conversions

As we know already, many operators and functions perform type conversions, e.g. multiplication * converts operands to numbers.

  If we pass an object as an argument, then there are two stages of calculations:

    The object is converted to a primitive (using the rules described above).
    If necessary for further calculations, the resulting primitive is also converted.

In Example below -

  The multiplication obj * 2 first converts the object to primitive (that’s a string "2").
  Then "2" * 2 becomes 2 * 2 (the string is converted to number).
*/

let obj5 = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  },
};

console.log(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

/* 

Binary plus will concatenate strings in the same situation, as it gladly accepts a string:
*/

console.log(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation
