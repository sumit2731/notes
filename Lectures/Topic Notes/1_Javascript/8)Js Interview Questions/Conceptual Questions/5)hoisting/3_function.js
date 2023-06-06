/**
 * Because of hoiting we can call functions before there declartion
 */
/**
 * Concept 1 -
 * When function is called , it also undergoes 2 phases of execution - declaration and initialiazation.
 * 
 * here because of first phase, memeory is allocated for variable d inside function, as d is declared as function inside IIFE. 
 * so outside variable is not used
 * 
 */
var d = 1;

(function(){
  d = '2'
  console.log(typeof d) //string
  function d() {
  }
})()

console.log(typeof d) //number

/**
 * Concept 2 - function declaration inside if blocks(conditional declaration)
 */

/**
 * When function is conditionally declared. only memory is allocated. so it is varible with value undefined
 * result vary depending upon browser - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#conditionally_created_functions
 */

console.log(typeof foo); // undefined
if (true) {
  function foo(){ return 1; }
}


/**
 * However if we try to access variable after conditional statement is executed, it behaves like function
 */
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

/**
 * Complex problem based on above 2 concepts
 */

/**
 * Inside IIFE function declaration is inside if block. so memory is allocated for fn inside iife but value is undefined.
 * so control goes inside if block and fn is declarated inside IIFE.
 */
(() => {
  if (!fn) {
    function fn() {
      console.log('2')
    }
  }
  fn() //2
})()

function fn() {
  console.log('1')
}

// another one
function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4')
    }
  } 
  fn1() //4
})()


// another one !
(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3()
})()

//--------------------------------------------------------------------------------------------------------

/**
 * here b is not used at all. if you try to access it, you will get error b is not defined
 */
 let a = function b() {
  console.log("function called");
}



//-----------------------------------------------------------------------------------------------------------------

/* 
*Hoisting of let and const inside function
*/

// This is a JavaScript Quiz from BFE.dev

let foo = 10
function func1() {
    console.log(foo) //undefined
    var foo = 1 // 
}
func1 ()


function func2() {
    /**
     * Since foo is defined inside this function it will not go look for foo outside current scope. ut since variable is
     * defined with 'let', it can be accessed before declaration. hence error is thrown
     * 
     * if remove let declaration from inside of function then we will see 10
     */
    console.log(foo) // ReferenceError: foo is not defined, if remove second line, then 10
    let foo = 1
}
func2 ()

