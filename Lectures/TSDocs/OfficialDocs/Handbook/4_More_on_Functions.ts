/**
 * Important Things -
 *
 * a)If we have functions of 2 types f1 and f2. if return type and initial arguments of f1 and f2 type
 *  are same if f2 has more parameters than f1. still variable of type f2 can accept function of type
 *  of type f1.since type of variable is f2 now,while calling we have to specify the parameters required
 *  by f2, but extra parameters are just ignored by f1.
 *
 *  This trick is used by callbacks to make passing second parameter optional.
 *
 *  read this blog - https://www.totaltypescript.com/function-types-are-weird-in-typescript
 *
 * b)f1 is function type that returns void. It can accept value of type f2 which have return type
 *  something else.but giving return type explicitly to function, make it typesafe i.e you will get error
 *  if you try tio return something from function
 *
 * c)Tips to write better generic functions
 *
 * d)In function overloading -
 *  a)function  implementation signature implements the function behavior, however,
 *    it is not directly callable. Only the overload signatures are callable. see example here -
 *      https://dmitripavlutin.com/typescript-function-overloading/
 *  b)function implementation signature should be generic and should implements all all overloaded
 *    signatures, otherwise that particular overloaded signature is marked as incompatible
 *  c)tips to write better overloads
 */

/**
 * Open Questions -
 *
 * Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call
 * and construct signatures in the same type arbitrarily:
 *
 */
//Function Type Expressions

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

type GreetFunction = (a: string) => void;

/**
 * @CallSignatures
 *
 * If we want to describe something callable with properties, we can write a call signature in an object
 *  type:
 */

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

/**
 * @ConstructSignatures
 */
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

/* 
Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and 
construct signatures in the same type arbitrarily:
*/

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

/**
 * Generic Functions
 *
 * It’s common to write a function where the types of the input relate to the type of the output,
 * or where the types of two inputs are related in some way. Let’s consider for a moment a function
 * that returns the first element of an array:
 */

function firstElement(arr: any[]) {
  return arr[0];
}

function firstElement2<T>(arr: Array<T>) {
  return arr[0];
}

const s1 = firstElement(["a", "b", "c"]); //any

const s2 = firstElement2(["a", "b", "c"]); //string

/**
 * By adding a type parameter Type to this function and using it in two places, we’ve created
 * a link between the input of the function (the array) and the output (the return value).
 * Now when we call it, a more specific type comes out:
 */

/**
 * @Inference
 * 
 * Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.
    We can use multiple type parameters as well. For example, a standalone version of map would look like this:
 */

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
//if we give some tother type to n, then we get error in types of array
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/**
 * @Constraints - we can pass constraints to generics using extends.These constraints are then applied
 */

/**
 * Guidelines for Writing Good Generic Functions
 *
 * a)Push Type Parameters Down
 *
 * Rule: When possible, use the type parameter itself rather than constraining it
 */

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement21<Type extends any[]>(arr: Type) {
  return arr[0];
}

/**
 * These might seem identical at first glance, but firstElement1 is a much better way to write this function.
 * Its inferred return type is Type, but firstElement2’s inferred return type is any because TypeScript has
 * to resolve the arr[0] expression using the constraint type, rather than “waiting” to resolve the element
 * during a call.
 */

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement21([1, 2, 3]);

/**
 * b)Use Fewer Type Parameters
 *
 * Rule: Always use as few type parameters as possible
 */

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

let a1 = filter1([1, 2, 3], (val) => val > 1);
let a2 = filter2([1, 2, 3], (val) => val > 1);

/**
 * c)Type Parameters Should Appear Twice
 *
 * Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
 */

/**
 * Optional parameter
 *
 * (a?: number) type of a will be number | undefined, so functional can be called with 3 values -
 *
 * a(), a(10), a(undefined)
 */

function optionalParam(a?: number) {
  console.log(a); // type is number | undefined
}

optionalParam();
optionalParam(undefined);
optionalParam(10);

/**
 * Default Param
 * You can call a function without that param also. but you cannot mark a argument as default and
 *  make it optional
 * so this is alter way of marking a parameter as optional. now function can be called without any
 * argument
 */
function defaultParam(number1 = 10) {
  return number1; // type is always number
}

defaultParam();
defaultParam(20);
defaultParam(undefined);

/**
 * Optional Parameters in Callbacks
 *
 * common mistake - do not make optional parameters optional. because that way they will have type of
 *   declaredType | undefined. then you need have checks to narrow down undefined types.
 */

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});

/**
 * Better way
 *
 * This works because - In ts you can functionType with more parameters can have values of function type
 * which has less parameters
 */

function myForEach2(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach2([1, 2, 3], (a) => {
  console.log(a.toFixed());
});

myForEach2([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});

/**
 * Function Overloads
 *
 * In TypeScript, we can specify a function that can be called in different ways by writing overload
 * signatures. To do this, write some number of function signatures (usually two or more), followed by the
 * body of the function:
 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

/**
 * In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments.
 * These first two signatures are called the overload signatures.Then, we wrote a function implementation
 * with a compatible signature. Functions have an implementation signature, but this signature can’t be
 * called directly. Even though we wrote a function with two optional parameters after the required one, it
 * can’t be called with two parameters!
 */
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

/**
 * Overload Signatures and the Implementation Signature
 */

function fn2(x: string): void;
function fn2() {
  // ...
}

/**
 * Again, the signature used to write the function body can’t be “seen” from the outside.
 * from outisde only overloaded signatures can be seen
 */
// Expected to be able to call with zero arguments
fn2();

/**
 * The implementation signature must also be compatible with the overload signatures
 */

//writing good overloads

/**
 * When all overloads have same number of argument types and same return type
 * prefer writing union type instead of overloads.
 *
 * Always prefer parameters with union types instead of overloads when possible
 */

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
/**
 * because TypeScript can only
 * resolve a function call to a single overload:
 */
len(Math.random() > 0.5 ? "hello" : [0]);

/**
 *
 * Because both overloads have the same argument count and same return type, we can instead
 * write a non-overloaded version of the function:
 * @returns
 */
//better way

function len2(x: any[] | string) {
  return x.length;
}

/**
 * Defining type for this in function
 *
 * have to use function syntax mot arrow types
 */

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

/**
 * Other Types
 */

/* 
object - any time that is not primmitive string, number, bigint, boolean, symbol, null, or undefined). 
This is different from the empty object type { }, and also different from the global type Object. It’s 
very likely you will never use Object.
*/

/**
 * unknown - used to define function which accepts arguments of any type and return anything
 */

/**
 * never
 */

/**
 * Function - The global type Function describes properties like bind, call, apply, and others present on
 * all function values in JavaScript. It also has the special property that values of type Function can
 * always be called; these calls return any.
 * 
 * This is an untyped function call and is generally best avoided because of the unsafe any return type.

If you need to accept an arbitrary function but don’t intend to call it, the type () => void is generally safer.
 */

function doSomething5(f: Function) {
  return f(1, 2, 3);
}

/**
 * rest parameters and Arguments
 *
 * rest parameters need to appear at last and their type needs to be Array or tupple
 */

/**
 * rest arguments
 *
 * A spread argument must either have a tuple type or be passed to a rest parameter
 *
 * If function has fixed parameters then , the spread operator can be applied only on tupple types.
 * to convert array type into tupple use as const
 */

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args5 = [8, 5];
const angle5 = Math.atan2(...args5);

// Inferred as 2-length tuple
const args6 = [8, 5] as const;
// OK
const angle6 = Math.atan2(...args6);

/**
 * Assigininbility of functions
 *
 * Function which return somethings can be assigning to type which return void
 */

Array.prototype.push;
