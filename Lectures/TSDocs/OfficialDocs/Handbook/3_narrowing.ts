/**
 * Ts overlays type analysis on JavaScript’s runtime control flow constructs like if/else, conditional
 * ternaries, loops, truthiness checks, etc., which can all affect those types.
 *
 * Within our if check,TypeScript sees typeof padding === "number" and understands that as a special form
 * of code called a type guard.
 *
 * TypeScript follows possible paths of execution that our programs can take to analyze the most specific
 * possible type of a value at a given position. It looks at these special checks (called type guards) and
 * assignments,and the process of refining types to more specific types than declared is called narrowing.
 *
 * constructs that ts understand for typeguards
 */

/**
 * @typeof - it knows about some of its quirks in JavaScript.like type of null is object
 */
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    //here type is string[] | null (as typeof null = object)
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

/**
 * @truthiness narrowing - we can remove falsy types from union by using null checks(if checks)
 */

function printAll2(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s); // here type is string[] as null type is removed because of if check
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

/**
 * @EqualityNarrowing - TypeScript also uses switch statements and equality checks like ===, !==, ==,
 * and != to narrow types.
 *
 * when 2 union types are equal, the ts is able to narrow down both types to their common type
 */

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    //if they are equal then only common type is string only
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);

    console.log(y);
  }
}

/**
 * Checking against specific literal values (as opposed to variables) works also.
 */

function printAll3(strs: string | string[] | null) {
  if (strs !== null) {
    //ts knows inside if branch strs cannot be null
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function dummyFuncction(a: string | number) {
  if (a == "happy") {
    console.log(a); //here type is literal "abc"
  }
}

/* 
JavaScript’s looser equality checks with == and != also get narrowed correctly. 

checking whether something == null actually not only checks whether it is specifically the value 
null - it also checks whether it’s potentially undefined. The same applies to == undefined: 
*/
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

/**
 * @in operator narrowing
 *
 * with the code: "value" in x. where "value" is a string literal and x is a union type. The “true”
 * branch narrows x’s types which have either an optional or required property value, and the “false”
 * branch narrows to types which have an optional or missing property value.
 */

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;

    //(parameter) animal: Fish | Human
  } else {
    animal;
    //(parameter) animal: Bird | Human
  }
}

/**
 * @Instance of Narrowing
 *
 * JavaScript has an operator for checking whether or not a value is an “instance” of another value.
 * More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x contains
 * Foo.prototype.this can be useful for most values that can be constructed with new.
 */

/**
 * @Assignemnt Narrowing Down by assignments
 *
 * when we assign to any variable, TypeScript looks at the right side of the assignment and narrows
 * the left side appropriately.
 *
 * Notice that each of these assignments is valid. Even though the observed type of x changed to number
 * after our first assignment, we were still able to assign a string to x. This is because the
 * declared type of x - the type that x started with - is string | number, and assignability is always
 * checked against the declared type.
 */

let x1 = Math.random() < 0.5 ? 10 : "hello world!";

x1 = 1; //number

console.log(x1);

x1 = "goodbye!"; //string

console.log(x1);

//If we’d assigned a boolean to x, we’d have seen an error since that wasn’t part of the declared type.
x1 = true;

/**
 * @ControlFlowAnalysis (analysis of code based on reachability)
 *
 * this analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow
 * analysis to narrow types as it encounters type guards and assignments.
 *
 * padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the
 * rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a
 * result, it was able to remove number from the type of padding (narrowing from string | number to string)
 * for the rest of the function.
 *
 */

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  /**
   * @ts knows that if it reaches here then type is string only, in case of number, the return statement
   * above executes
   */
  return padding + input;
}

/**
 * When a variable is analyzed, control flow can split off and re-merge over and over again, and that
 * variable can be observed to have a different type at each point.
 */

function example2() {
  let x5: string | number | boolean;

  x5 = Math.random() < 0.5; //boolean

  console.log(x5); //boolean
  if (Math.random() < 0.5) {
    console.log(x5);
    x5 = "hello";
    console.log(x5); //string
  } else {
    console.log(x5);
    x5 = 100;
    console.log(x5);
  }
  return x5; // it knows type is either string or number as either if or else is executed
}

/**
 * @TypePredicates
 *
 * To define a user-defined type guard, we simply need to define a function whose return
 *  type is a type predicate:
 *
 * A predicate takes the form parameterName is Type, where parameterName must be the name
 * of a parameter from the current function signature.
 */

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
/**
 * Any time isFish is called with some variable, TypeScript will narrow that variable to
 * that specific type if the original type is compatible.
 */

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**
 * You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:
 */

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish); // ts knows that array will of type Fish[]
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

/**
 * The predicate may need repeating for more complex examples
 */
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

/**
 * this-based type guards
 */

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

/**
 * @AssertionFunctions
 */
//asserts condition

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg);
  }
}
function yell(str) {
  assert(typeof str === "string");
  return str.toUppercase();
  //         ~~~~~~~~~~~
  // error: Property 'toUppercase' does not exist on type 'string'.
  //        Did you mean 'toUpperCase'?
}

/* 
The other type of assertion signature doesn’t check for a condition, but instead tells TypeScript that a 
specific variable or property has a different type.
*/
function assertIsString2(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new AssertionError("Not a string!");
  }
}

function yell2(str: any) {
  assertIsString2(str);
  // Now TypeScript knows that 'str' is a 'string'.
  return str.toUppercase();
  //         ~~~~~~~~~~~
  // error: Property 'toUppercase' does not exist on type 'string'.
  //        Did you mean 'toUpperCase'?
}

/**
 * And just like type predicate signatures, these assertion signatures are incredibly expressive. We can
 * express some fairly sophisticated ideas with these.
 */
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError(
      `Expected 'val' to be defined, but received ${val}`
    );
  }
}

/**
 * @DiscriminatedUnion
 * That got rid of the error! When every type in a union contains a common property with literal types,
 *  TypeScript considers that to be a discriminated union, and can narrow out the members of the union.
 *
 * here we saw how typescript can narrow down a union type based on value of one property
 *
 * From Docs -
 *
 * The problem with this encoding of Shape is that the type-checker doesn’t have any way to know whether or
 * not radius or sideLength are present based on the kind property. We need to communicate what we know to
 * the type checker. With that in mind, let’s take another swing at defining Shape.
 */

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

/* 
In this case, kind was that common property (which is what’s considered a discriminant property of Shape).
Checking whether the kind property was "circle" got rid of every type in Shape that didn’t have a kind
property with the type "circle". That narrowed shape down to the type Circle.
*/

function getArea2(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

/**
 * @never type
 *
 * Exhaustiveness Checking
 *  The never type is assignable to every type,however, no type is assignable to never (except never
 *    itself).
 *
 * This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch
 * statement.
 *
 */
