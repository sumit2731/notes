/**
 * 1-3 - Uisng Type utilities
 *
 * 4 - Convert object properties into union type. keyof
 *
 * 5- Union vs Discrinated union vs Enum
 *
 * 6 - extracting a type from union. used Extract to exact subset of types from union type
 *
 *7 - extracting the type(or union of types) from union using Exclude

 *8 - Got type of individual object properties into a new type. used indexed types

 *9 - Get union type where each type is value of common property in all types of  discriminated union. used common property in 
    indexed type

 10 - got values of different properties of object into individual literal types using "as const" and indexed access

 11 - extending on 10 we want to have some property vaues as literal types in union

 12 - here we want all properties not some

 13 - convert array values into union type where each element maps to each literal type in union
      convert array values into union type where each element maps to some literal types in union
 */

/**
 * Utility Types -
 *
 * ReturnType<FunctionType> => returns the return type of function
 *
 * Parameters<FunctionType> => returns the tupples where each element is functional parameters.
 *
 * Awaited<Type> => here Type is promise whcih resolved to type t1. then awaited returns t1.
 *
 * Extract<UnionType, Type> =>
 *  returns union of types in first union type that extend the second param. see docs
 *  InDocs -
 *      Extract<Type, Union> => Constructs a type by extracting from Type all union members that are assignable to Union.
 *
 * @Exclude<UninoType, Union> =>
 *
 * Pick <Type, Keys>
 * Omit <Type,Keys>
 *
 * Parameters<Type>
 *
 */

/**
 * Typescript Keywords -
 *
 * a)typeof "variableName"
 *  returns the type of varaibleName
 *
 * b)keyof "ObjectType"
 *  returns the union type where each type is property of ObjectType. see 4
 *  keyof only operates on types not on variable names.
 *
 * c) as const
 *      resolves an object's values as literal types
 *      lecture 10
 */

/**
 * Terms in typescript -
 *
 * a)unions, discrinamted unions and enums (see 5)
 */
/**
 * Index access syntax -
 *      type t1 = typeof objectName["propertyName"]
 *          returns type of objectName.propertyName
 *          for literal type use "as const"
 *      type t2 = discriminatedUnionType["commonProperty"]
 *          returns union type where each type is value of common property in union type
 *
 *      type t3 = typeof objectName["unionType where each type is property"]
 *          returns union type where each type is => type of objectName[propertyName]
 *          for using literal value use "as const"
 *
 *      type t4 = typeof arrayName[1 | 3]
 *          returns union_type where each type is element of arrays whose index is used
 *      type t5 = typeof arrayName[number]
 *          all elements of array are put in union type. number is keyword here.
 */
