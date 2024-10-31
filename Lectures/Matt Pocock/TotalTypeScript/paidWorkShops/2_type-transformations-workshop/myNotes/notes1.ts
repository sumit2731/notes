/**
 * 3 - here we used awaited utility. see definition of this utility
 *
 *9 - Using indexed access on common property in discriminated union, we get union of all possible
      values. if that property is not present in one of union types we get error, so this
      works only with discriminated unions.
 
10 - as const helps us to get literal value from broder type slike string, number. it works only at
   type level. it works at nested level also.

 11 - here we passed union into indexed access and got union of values out from object.

 13 - in 12 we got all values of object into union type, here we get all values of array into union
     type
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
