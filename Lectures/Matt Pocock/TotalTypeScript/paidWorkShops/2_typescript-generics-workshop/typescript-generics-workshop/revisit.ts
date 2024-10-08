/**
 *
 * 4- Using Type Helpers(Generics in Types) and Generics in Function at same place
 * 4.5 - How we can use generics to define a link between 2 params of function.
 * here we first param was array and second was callback.
 *
 *
 * 7,8 - We can give type to generics ourself also, when arguments are not required.
 *  Also these generics can be passed to any level
 * 9 - How to derive only generic part of argument from generic defined in functions
 *
 */

/**
 * 12 -
 *  a)function parameters dnt provide exact type of arguments
 *  b)high level generics and low level generics
 *  c)How to use generics to capture hight type and then extract needed type from this
 *
 *
 * 14 - see how you can give type to function parameters
 *
 * 14.5,6 - that the choices of what you represent in these type arguments do matter for TypeScript's inference.
 *  The further you get away from the thing that you're actually trying to infer, the more you try to infer in
 *  those slots, the worse the inference is going to be.
 */

/**
 * 17 - see how generic type flows through the system. generic of function, can be passed to another
 * type helper and or another function generic. at run time when function generic is resolved
 * this is passed forward.
 */

/**
 * 18 - generic types inferred in outer function can be accessed by inner function, just like normal
 * variables of outer scope can be accessed because of closure
 */

/**
 * 20.7 - you can't pass in type arguments and infer the actual arguments in the
 * same function call. you need to split that to 2 function calls
 */
