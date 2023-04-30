// 1- let variables are not not hosited. so they cannot be used before initialization

console.log(a)
let a = 1; // 

/* 
engine knows that a is declared, but cannot access it before initialization
ReferenceError: Cannot access 'a' before initialization
*/


//2 - variables declared by let, engine is aware of them but cannot access them as they are in temporal dead zone

var a = 1;

function f1() {
  console.log(a); 
  let a = 2;
}
f1();

/* 
here a is not access from outer scope because inner scope knows a but it is in temporal dead zone, hence error

*/

/* 
3 - temporal dead zone(TDZ) acts within the current scope, variable declared by let is in block scope. and block scope starts after
{ ,line * is outside block scope, there value of count is taken from outside scope.

*/

let count = 0;

(function() {
  if (count === 0) { //(*)
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();














//1

//with var - var variables are hoisted

// var count = 0;

// (function() {
//   if (count === 0) {
//     var count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();



/* 
with let - let variables are not hosited and scope of let is block scope
*/

let count = 0;

(function() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();