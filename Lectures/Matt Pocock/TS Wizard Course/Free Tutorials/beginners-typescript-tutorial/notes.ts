// @ts-ignore - ignores the error
// @ts-expect-error - If there is error in line then no error will be shown, however if there is no error, then error is shown

import { TypeOf } from "zod";



/**
 * Problem 4 - Functional parameters can also be made optional
 */

/**
 * Problem - 6
 * 
 * use of this comment - // @ts-expect-error
 */


/**
 //problem 8 => how to define return type of function
 */

function sum1(a, b): number {
  return a + b;
}

function sum2(a: number, b: number): number {
  return a + b;
}

const multiply = (a, b): number => {
  return 1;
};
const multiply2 = (a: number, b: number): number => {
  return 1;
};

/**
 * See Third problem in hooks section of React.While specifying the type of function, we will not get errors
 * even if return object has some extra properties 
 */
const multiply3: (a: number, b: number) => number = (a, b)  => {
  return 1;
};

/* 

problem 9 - 

  approach 1 -
    type 3 is assignablee to any type, and any type can be assign to anyother type;
  approach 3 -
    variable whose type is any can be given any type. if function is not given a return type, type script will try to infer its 
      return type

  approach 2 -
    concept of type casting. and how it is different from assigning a type to vaariable. typecasting is stronger way, more stronger
    way of telling ts, what we think type should be.

  problem 9 - see'as' syntax in solution 3.
  problem 9 - seen solution 2.

*/

/**
 * Problem 10 - we can passing type argument along with function arguments to function,constructors and class.
 * how to see whether you can pass type argument or not
 */

/**
 * problem 11 -
 *
 * index means key of object.
 * 
 * Record type can also specify the same thing as index type.
 *
 */

/**
 * problem 12 -
 *
 *how to use typeof operator to be sure that union type is of given type.ts will give you ide suggestions for that type
 *You cnt access the property unless you know that it is there. so we write the condition in different way. see commnets in 
 solution
 */

/**
 * Problem 13 - Here we had any type but we want to narrow it down to have specific type.
 * here we used instanceof operator instead of typeof
 */

/**
 * Problem 14 - interface can inherit other interfaces but types cannot.
 * In types we have intersection solution. it like type3 = type1 & type2;
 */

/**
 * Problem 15 - using intersection to define new types by combining existing types. you can combine as many types as ypu want.
 * also you can create new types on the flylike this -
 * 
 * type1 & type2 & {id: number, namne: string}
 * 
 * here third type is defined on the fly
 */

/**
 * problem - 16
 * typescript built helpers - Omit<T,K>, Pick<T,K>. you can omit or pick multiple properties using union type
 */

/**
 * Problem 17
 *
 * how to define types for functions. difference between defining return type as undefined vs void. whether function type should be
 * defined inline or be defined as separate type. see solution 2.
 *
 */

/**
 * Problem 18
 * return type of async functions is always Promise
 */