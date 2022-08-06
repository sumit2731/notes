/**
 * Because of hoiting we can call functions before there declartion
 */


console.log(typeof foo);
if(true) {
  function foo() {console.log(1)}
}


/**
 * When function is conditionally declared. only memory is allocated. so it is varible with value undefined
 * result vary depending upon browser - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#conditionally_created_functions
 */

console.log(typeof foo); // undefined
if (true) {
  function foo(){ return 1; }
}


/**
 * However if we try to accessvariable after conditional statement is executed, it behaves like function
 */

// This is a JavaScript Quiz from BFE.dev


if (true) {
    function foo() {
      console.log('BFE')
    }
  }
  if (false) {
    function bar() {
      console.log('dev')
    }
  }
console.log(typeof foo) //function
console.log(typeof bar) //undefined
 