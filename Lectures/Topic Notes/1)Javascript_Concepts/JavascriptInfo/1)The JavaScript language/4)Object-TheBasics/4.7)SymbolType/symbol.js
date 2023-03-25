/**
 * By specification, only two primitive types may serve as object property keys:
        string type, or
        symbol type

    Symbol is a primitive type for unique identifiers.
    A “symbol” represents a unique identifier.A value of this type can be created using Symbol():
 */

let id1 = Symbol();

/**
 * Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes.
 */

let id2 = Symbol("id"); // id2 is a symbol with the description "id"

/**
 * Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values.
 * The description is just a label that doesn’t affect anything.
 *
 * to summarize, a symbol is a “primitive unique value” with an optional description. Let’s see where we can use them.
 */
let id3 = Symbol("id");
let id4 = Symbol("id");

console.log(id3 == id4); // false

/**
 * Symbols don’t auto-convert to a string.Most values in JavaScript support implicit conversion to a string. For instance, we can 
 * alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally 
convert one into another.if we really want to show a symbol -
    we need to explicitly call .toString() on it 
            Or 
    get symbol.description property to show the description only:
 */

let id5 = Symbol("id");
console.log(id5); // TypeError: Cannot convert a Symbol value to a string

console.log(id5.toString()); //Symbol(id)
console.log(id5.description); //id

/**
 * Uses of symbols
 */

/**
 * a)Hiden Properties - can be used to add proeprties to a onject that belongs to other codebase without overwriting any property in
 * other codebase
 */

let user = {
  // belongs to another code
  name: "John",
};

let id6 = Symbol("id");

user[id6] = 1;

/**
 * symbols in Object literal
 */
let id7 = Symbol("id");

let user7 = {
  name: "John",
  [id7]: 123, // not "id": 123
};

/**
 * Symbols are skipped by for..in loop
 *
 * for loop iterate over sting, enurable properties.
 * Object.keys also ignores them
 * Object.assign copies both string and enureable properties
 */

/**
 * Global Symbol
 * 
 * As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be
 * same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
 *
 *To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that 
 *repeated accesses by the same name return exactly the same symbol.
 *In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

 *That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol 
 *Symbol(key) and stores it in the registry by the given key.

 Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – 
 that’s what they are for.
 */

// read from the global registry
let id8 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log(id8 === idAgain); // true

/**
 * Symbol.keyFor
 *
 * We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global
 * symbol – we can use: Symbol.keyFor(sym):
 */

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

/**
 * Symbol.description - All symbol have description property
 */

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol, returned undefined if no description was provided while creating symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global
console.log(localSymbol.description); // name

/**
 * System symbols - There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various
 * aspects of our objects. They are listed in the specification in the Well-known symbols table:

    Symbol.hasInstance
    Symbol.isConcatSpreadable
    Symbol.iterator
    Symbol.toPrimitive
    …and so on.
 */

/**
 * Api Symmary
 */

//creating a symbol

let testSymbol = Symbol("test");

//accessing symbol descriton

console.log(testSymbol.description);

//creating global symbol

let globalSymbol1 = Symbol.for("globalSymbol1");

// find key for global symbol

let globalKey = Symbol.keyFor(globalSymbol1); // globalSymbol1
