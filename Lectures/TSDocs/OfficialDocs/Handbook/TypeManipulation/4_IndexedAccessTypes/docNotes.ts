type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number

//The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

type I1 = Person["age" | "name"]; //string | number

type I2 = Person[keyof Person]; //string | number | boolean

//You’ll even see an error if you try to index a property that doesn’t exist:

type I22 = Person["alive"]; //Property 'alve' does not exist on type 'Person'.

/* 
Another example of indexing with an arbitrary type is using number to get the type of an array’s
  elements. We can combine this with typeof to conveniently capture the element type of an array 
  literal:
*/

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

//******You can only use types when indexing, meaning you can’t use a const to make a variable reference:

const key = "age";
type Age = Person[key]; /* Type 'key' cannot be used as an index type.
'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'? */

//However, you can use a type alias for a similar style of refactor:
type key = "age";
type Age2 = Person[key];

/**
 * Result is union type where each type represent the element in array.
 * Here all elements are of same type so,ArrayType is single type only
 */

const MyArray2 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
  { id: 1, country: "India" },
];
/**
 * Here Array type will be union type because a single type cannot be used to represent all elements of array.
 * also note the pattern that single type in union will have all types but they will be made optional.
 * so that single property access works on this type
 */
type ArrayType = (typeof MyArray2)[number];
/**
 * Indexed Access on union type with a single prop retruns a new union type
 * which si result of single prop access on each type of union
 */
type Age3 = ArrayType["age"];

/**
 * My Notes
 *
 * Syntax of indexed access is -
 *
 * type[indexedAccessType]
 *
 * Expected values -
 *  type - Object type, Array Type or Union type (each type is Object type)
 *
 *  indexedAccessType -
 *    for Object type -
 *      a)string which represents property
 *      b)Union of sting properties but each member of union should be a property on object
 *    for Array type -
 *      a)pass literal number and it will give you a union that represents which member of array
 *
 *
 *    Type                IndexedAccessType                Result_Type
 *    Object_Type         string                           value of respective property_of_object
 *    Object_Type         Union of string literal values   union of types of values of respective properties
 *    Union Of Object     string                           union of values type, where each type is value from each union type
 *    Array_Type          number                           type which represents type of values present in array
 *
 *
 *
 *
 *
 *
 */

type union = "name" | "id";
interface StringArray {
  [index: union]: string;
}
