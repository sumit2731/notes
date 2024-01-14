/**
 * Important things
 *
 * a)How conflicts are handled in extending a interface and intersecting types(this is not covered in docs,
 *  see extra.ts for details)
 *
 * a)how to use genrics in type alias and interfaces, and then how they can be passed to function,
 *  and then inference can happen based on those
 *
 *
 * b)
 *
 */

/**
 * Pending things - How extend (in interface) and intersection (in types) handle conflicts
 */

/**
 * Property Modifiers -
 *
 * ? and readonly
 */

/**
 * readonly - TypeScript doesn’t factor in whether properties on two types are readonly when checking
 *  whether those types are compatible, so readonly properties can also change via aliasing.
 */

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

/**
 * Index Signatures
 *
 * This index signature states that when a StringArray is indexed with a number, it will return a string.
 *
 * Only some types are allowed for index signature properties: string, number, symbol, template string
 * patterns, and union types consisting only of these.
 */

interface StringArray {
  [index: number]: string;
}

/**
 * It is possible to support both types of indexers, but the type returned from a numeric indexer must
 * be a subtype of the type returned from the string indexer. This is because when indexing with a number,
 * JavaScript will actually convert that to a string before indexing into an object. That means that
 * indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to
 * be consistent.
 */

interface StringArray2 {
  [index2: string]: string;
  [index: number]: "hello";
}

/**
 * Go through docs to see what values can be assigned and what not
 */

/**
 * Excess Property Checks
 *
 * Where and how an object is assigned a type can make a difference in the type system.
 *
 * One of the key examples of this is in excess property checking, which validates the object more
 * thoroughly when it is created and assigned to an object type during creation.
 *
 * Object literals get special treatment and undergo excess property checking when assigning them to
 * other variables, or passing them as arguments. If an object literal has any properties that the
 * “target type” doesn’t have, you’ll get an error:
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

let squareConfig1: SquareConfig = {
  width: 1,
  colour: "",
};

//example 2

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 });

/**
 * How to get around this -
 *
 *  a)use type assertions
 *  b)add a string index signature on object
 */

/**
 * One final way to get around these checks, which might be a bit surprising, is to assign the object to
 * another variable: Since assigning squareOptions won’t undergo excess property checks, the compiler
 * won’t give you an error:
 */

let squareConfig2 = { colour: "red", width: 100 };

let mySquare2 = createSquare(squareConfig2);
let squareConfig3: SquareConfig = squareConfig2;

/**
 * The above workaround will work as long as you have a common property between squareOptions and
 * SquareConfig. In this example, it was the property width. It will however, fail if the variable
 * does not have any common object property. For example:
 */

/**
 * Extending Interface vs Intersection Types
 *
 * How they handle conflict decides which one should you use
 */

/**
 * Generic Object Types - Using Generics with Interface and Types
 *
 * Generic Functions
 */

interface Box<Type> {
  contents: Type;
}
let boxA: Box<string> = { contents: "hello" };

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

/**
 * here ts infets the Type for Box<Type>
 */
setContents(boxA, 123);

//types  can also be generic
type Box2<Type> = {
  contents: Type;
};

let boxB: Box2<string> = { contents: "bye" };

function setContents2<Type>(box: Box2<Type>, newContents: Type) {
  box.contents = newContents;
}

setContents2(boxB, "");
setContents2(boxB, 123);

/* 
Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to 
write other kinds of generic helper types.
*/

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

//type OneOrManyOrNull2<Type> = OneOrMany<Type> | null;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

type OneOrManyOrNullStrings2 = OneOrMany<string> | null;

/**
 * Array Type
 */

/**
 * ReadonlyArray<string> or readonly string[]
 *
 * The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
 *
 * you cannot call push on these
 *
 * ReadonlyArray<string>)
 * readonly Type[]
 *
 * One last thing to note is that unlike the readonly property modifier, assignability isn’t
 *  bidirectional between regular Arrays and ReadonlyArrays.
 */

/**
 * Tupple Types - A tuple type is another sort of Array type that knows exactly how many elements it
 * contains, and exactly which types it contains at specific positions.
 *
 * If we try to index past the number of elements, we’ll get an error.
 *
 *
 * gives as error - when try to access index that does not exists
 *
 */

/**
 * Optional members in tupples
 */

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

/**
 * Uses of Optional tupples
 */

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}

//is basically equivalent to:

function readButtonInput2(name: string, version: number, ...input: boolean[]) {
  // ...
}

/**
 *
 * readonly tupple type
 *
 * pair: readonly [number, string]
 *
 * readonly tupples cannot be assigned to tupples of same type also
 *
 * using as const on array gives readonly tupples
 */
