/* 
syntax -
    SomeType extends OtherType ? TrueType : FalseType;


    When the type on the left of the extends is assignable to the one on the right, then you’ll get 
    the type in the first branch (the “true” branch); otherwise you’ll get the type in the latter
    branch (the “false” branch).

*/

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; //number

type Example2 = RegExp extends Animal ? number : string; //string

// **************Power of conditional types comes from using them with generics*************

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

/**
 * Instead of Doing this
 */
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

/**
 * Do this
 */

type NameOrId<T extends string | number> = T extends string
  ? NameLabel
  : IdLabel;

function createLabel2<T extends string | number>(param: T): NameOrId<T> {
  throw "unimplemented";
}

// ******************Conditional Type Constraints ******************************

//Example 1

type MessageOf<T> = T["message"];

//way 1

/**
 * Way1 - We could constrain T, and TypeScript would no longer complain:
 */

type MessageOf2<T extends { message: string }> = T["message"];

/* 
way 2 - However, what if we wanted MessageOf to take any type, and default to something like never if 
a message property isn’t available? We can do this by moving the constraint out and introducing a 
conditional type:

*/

type MessageOf3<T> = T extends { message: any } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>; //string;

type DogMessageContents = MessageOf<Dog>; //never

/* 
Example 2 - we could also write a type called Flatten that flattens array types to their element 
    types, but leaves them alone otherwise.

When we know T extends array type then T[number is allowed
*/

type Flatten<T> = T extends Array<any> ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>; //string

// Leaves the type alone.
type Num = Flatten<number>; //number

//************************ Inferring Within Conditional Types */

/**
 * We just found ourselves using conditional types to apply constraints and then extract out types.
 * This ends up being such a common operation that conditional types make it easier.
 *
 * Conditional types provide us with a way to infer from types we compare against in the true branch
 * using the infer keyword. For example, we could have inferred the element type in Flatten instead
 * of fetching it out “manually” with an indexed access type:
 */

type Flatten2<T> = T extends Array<infer elementType> ? elementType : T;

//Examples on useage of infer

//writing auntility that returns the return type of function

type getReturnType<Type> = Type extends (...args: any[]) => infer Return
  ? Return
  : never;

type FunctionType = (param: string) => string;

type returnType = getReturnType<FunctionType>;


//Distributive Conditional Types
/* 
see bookmarks -> 
  typescript -> topics -> 
    infer -> logrocket
    never -> logrocket


To learn in details how this behaves  see 
*/

/**
 * My Notes - The infer keyword and conditional typing in TypeScript allows us to take a type and
 * isolate any piece of it for later use.
 */

//define a generic that returns the first type of argument

type getFirstArgument<T> = T extends (
  firstArg: infer arg,
  ...args: any[]
) => any
  ? arg
  : never;

//define a utility that returns the type of resolved value of promise

type GetResolvedPromiseType<T> = T extends Promise<infer ResolvedType>
  ? ResolvedType
  : any;

/* 
Used in defining some built in untilities 

*/
//Defining utility type that removes null and undefined from union, this is built in uitlity type

type NonNullable2<T> = T extends null | undefined ? never : T;

type Exclude2<Type, ExcludedType> = Type extends ExcludedType ? never : Type;

type Extract2<Type, ExtractType> = Type extends ExtractType ? Type : never;

//ComponentPropInReact

type ComponentProps<T extends JSXElement> = 
