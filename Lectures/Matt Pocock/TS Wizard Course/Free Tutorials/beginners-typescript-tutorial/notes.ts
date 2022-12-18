// @ts-ignore
// @ts-expect-error

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

const multiply3: (a: number, b: number) => number = (a, b) => {
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
 * index means key of object
 *
 */

/**
 * problem 12 -
 *
 *how to use typeof operator to be sure that union type is of given type.ts will give you ide suggestions for that type
 *You cnt access the property unless you know that it is there. so we write the condition in different way. see commnets in solution
 */

/**
 * Problem 13 - how typeof operator agan saves the day
 */

/**
 * Problem 14 - interface can inherit other interfaces but types cannot.
 */

/**
 * Problem 15 - using intersection to define new types by combining existing types. you can combine as many types as ypu want.
 */

/**
 * problem - 16
 * typescript built helpers - Omit<T>, Pick<T>. you can omit or pick multiple properties using union type
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

/* 
JasVir Sood
8.00 - 26 oct 2023 - 1 lakh  
7.25 - 10 May 2024 - 1 lakh

8.50 - 21 oct 2024 - 18913()

Santosh 

8.00 - 26 oct 2023 - 1 lakh (duplicate)
7.75 - 26 april 2024 - 1 lakh
7.25 - 10 may 2024 - 1 lakh (duplicate)

8.50 - oct 2024

1
*/

/* 
Santosh Sood
8.00 % - 26 Oct 20-23 - 1.00 lakh - 4583030006462694-1 (1,26,828) (verified)
7.75 % - 26 Apr 21-24 - 1.00 lakh - 4583030007994884-1 (1,25,921)
7.25 % - 10 May 21-24 - 1.00 lakh - 4583030008082247-1 (1,00,000) (verified)

Jasvir Sood
8.50 % - 21 Oct 22-24 - 1.10 lakh - 4583030006403205-3 (1,30,166)
8.50 % - 21 Oct 22-24 - 18,913    - 4583030006403205-2 (22,380)

*/
