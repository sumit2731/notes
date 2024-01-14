//generics in idnetity function

function identity<Type>(arg: Type) {
  return arg;
}

/* 
Once we’ve written the generic identity function, we can call it in one of two ways. The first way is
    to pass all of the arguments, including the type argument, to the function.
Here we explicitly set Type to be string as one of the arguments to the function call, denoted using
    the <> around the arguments rather than ().
*/
let output = identity<string>("myString");

/**
 * The second way is also perhaps the most common. Here we use type argument inference — that is, we
 * want the compiler to set the value of Type for us automatically based on the type of the argument
 * we pass in:
 */

let output2 = identity("myString");

// **********************Working with Generic Type Variables******************

/* 
This allows us to use our generic type variable Type as part of the types we’re working with,
  rather than the whole type, giving us greater flexibility.
*/

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
//*************** Generic Types *********************

/* 
The type of generic functions is just like those of non-generic functions, with the type parameters 
    listed first, similarly to function declarations:
*/

let myIdentity: <Type>(arg: Type) => Type = identity;

//We can also write the generic type as a call signature of an object literal type:

let myIdentity2: { <Type>(arg: Type): Type } = identity;

/* 
Which leads us to writing our first generic interface. Let’s take the object literal from the previous
    example and move it to an interface:
 */

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity3: GenericIdentityFn = identity;

/* 
In a similar example, we may want to move the generic parameter to be a parameter of the whole interface.
This lets us see what type(s) we’re generic over (e.g. Dictionary<string> rather than just Dictionary).
This makes the type parameter visible to all the other members of the interface.

Notice that our example has changed to be something slightly different. Instead of describing a 
generic function, we now have a non-generic function signature that is a part of a generic type. When
we use GenericIdentityFn, we now will also need to specify the corresponding type argument (here: 
    number), effectively locking in what the underlying call signature will use. Understanding when 
    to put the type parameter directly on the call signature and when to put it on the interface 
    itself will be helpful in describing what aspects of a type are generic.
*/

interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}

let myIdentity4: GenericIdentityFn2<number> = identity;

// ********************Generic Classes ******************************************

/* 
In addition to generic interfaces, we can also create generic classes. Note that it is not possible
to create generic enums and namespaces.

As we cover in our section on classes, a class has two sides to its type: the static side and the 
instance side. Generic classes are only generic over their instance side rather than their static 
side, so when working with classes, static members can not use the class’s type parameter.
*/

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// ************************Generic Constraints*******************************************

//type can also be used
interface Lengthwise {
  length: number;
}

function loggingIdentity2<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
//this now gives error
loggingIdentity(3);

//Instead, we need to pass in values whose type has all the required properties:

loggingIdentity2({ length: 10, value: 3 });

/* 
Using Type Parameters in Generic Constraints - You can declare a type parameter that is constrained by another type 
parameter.

extending a union type means value should be one of types from union
*/

function getProperty<Type, Property extends keyof Type>(
  obj: Type,
  prop: Property
) {
  return obj[prop];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");

// **************************Using Class Types in Generics******************************************

/* 
When creating factories in TypeScript using generics, it is necessary to refer to class types by 
    their constructor functions. For example,
*/

function create<Type>(c: { new (): Type }): Type {
  return new c();
}
// function create2<Type>(c: new () => Type): Type {
//   return new c();
// }

class Animal {
  numLegs: number = 4;
}

let animal = create(Animal);
let animal2 = create(Animal);

/* 
A more advanced example uses the prototype property to infer and constrain relationships 
  between the constructor function and the instance side of class types.
*/

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

// **************** Generic Parameters Defaults************************************

//read docs

// declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
// declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
// declare function create<T extends HTMLElement, U extends HTMLElement>(
//   element: T,
//   children: U[]
// ): Container<T, U[]>;

declare function create2<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;

const div2 = create2();
const p2 = create2(new HTMLParagraphElement());

/* 
Summary -

How generics behaves with declaration merging

*/

/**
 * Extra Notes - generics can also be used on induival types seeIndexedAccesType, exercise 1
 * generics can also be used in interfaces
 */
