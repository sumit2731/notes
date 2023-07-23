/*

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or 
    more arguments (for function calls) or elements (for array literals) are expected, or an object expression to 
    be expanded in places where zero or more key-value pairs (for object literals) are expected.

When we see "..." in the code, it is either rest parameters or the spread syntax.There’s an easy way to distinguish 
    between them:

    When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of 
        arguments into an array.
    When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.



In the examples below we used an array to demonstrate the spread syntax, but any iterable will do.
The spread syntax internally uses iterators to gather elements, the same way as for..of does.

When ...arr is used in the function call, it “expands” an iterable object( arr) into the list of arguments.
*/

let arr = [1,2,3];

Math.max(...arr);

/* 
We can even combine the spread syntax with normal values:
*/

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25


/* 
spread syntax can be used to merge arrays:
*/

let merged = [0, ...arr, 2, ...arr2,5];
/* 
it can also be used to get key-value pair form object whne used inside {}
*/

let obj1 = {a:1, b:2 , c:3};

let obj2 = {...obj1}