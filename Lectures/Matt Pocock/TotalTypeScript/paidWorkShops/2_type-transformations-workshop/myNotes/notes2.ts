/**
 * Lecture 14 - here we saw that we can use string in template literals to represents any string -
 *  ${string}. see extra notes
 *
 * lecture 15 - here we used condituonal types along with template literals and saw how strings
 *  extends works.
 *
 * 16 -use of union types in template literals
 *
 * 17 - see implementation of split utility from "ts-toolbelt"
 *
 * 18 - see how to turn strings into object property point
 *
 * 19 - lecture about how we can take objectType and derive another object type from it
 *  (modify name of properties- adding string, capitalize them etc)
 */
//Type helpers
/**
 * 20 - type helpers are functions. see notes in solution
 *
 * 20.6 - read notes about  {} vs Object vs object
 *
 * 20.7 - use of tupples and how to define a type that requires atleast one element in array.
 */

/**
 * 22 - now we will have if else logic in our type functions. also we introduced the never type.
 *  read neveruseCases in TSDOCS folder in your notes.
 *
 *
 * 23 - infer can be used in conditional types. read TS handbook docs to see how to use infer.
 *
 * 24 - a bit different use of infer to extract arguments from generics. or we can say that
 *  we can extract out type arguments to another type helper
 *
 * 25 - using infer on template literals and using template literals as capturing groups
 *
 * 26 - powerful paradigm of extracting something out from functions without having to declare types
 *   on them
 *
 * 27 - new way of using infer. which helps us to avoid nested ternaries
 *
 */

/**
 * 34 - this is very important pattern, so see solution comments.
 * pattern to transform
 *  union into different union
 *  union into objectTypes
 *  object into union
 *
 *
 * 36 - converted unions into other union type
 *
 * 39 - this little check is so useful for being able to extract things that you're not sure are they
 *  in all members of the union.
 *
 * 40 - I solved it, but it is important exercise
 */

/**
 * @NotAble to Solve
 *
 * 27 - solve it, but course solution is better.Here we saw that we can name infered variable with same
 *  name in different parts of union and then  return that
 *
 * 28 - When conditional types act on a generic type, they become distributive when given a
 *  union type.
 *
 * 32 - use of never type to prune some types out from object type.
 *
 * 33 - converting a discriminated union into object type. see comments on both solutions.
 *
 */

/**
 * Challenges -
 *
 * 37 - not able to solve
 */
