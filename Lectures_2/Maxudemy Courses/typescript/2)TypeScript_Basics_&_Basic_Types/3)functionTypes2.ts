/* 
These are just Extension examples from 3)functionTypes.ts
*/

let t1: (a: number)=> void;
let t2 = (a: number) => a;
/* 
This is possible
*/
//t1 = t2;
/* 
This is not possible
*/
//t2 = t1;


/* 
Not Allowed
*/
/* let t11: (a: number) => number;
let t21 = (a: number) => {
    console.log(a);
};
t11 = t21; */


let s1: (a: number, b : number) => number;
let s2 = (a: number) => a;
s1 = s2;
/* This is reason that it is allowed 
its okay to pass extra arguments
*/
let s3 = s1(2,3);


/* Not Allowed */
let s11: (a: number, b: number) => number;
let s21 = (a: number,b: number,c: number) => a+b+c;
//s11 = s21;

let s31 = s1(2, 3);
