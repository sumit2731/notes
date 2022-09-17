// This is a JavaScript Quiz from BFE.dev


/**
 * Function declaration happens in first phase, varible assignment in second phase
 * so variable asisgnment overrides the function decalartion
 */
var a = 1
function a() {
}

console.log(typeof a) //number

/**
 * When function is called , it also undergoes 2 phases of execution. here because of first phase of execution memeory is
 * allocated for variable d inside function. so outside variable is not used
 * 
 */
var d = 1;

(function(){
  d = '2'
  console.log(typeof d) //number
  function d() {
  }
})()

console.log(typeof d) //number

var e = 1
const f = function e() {}

console.log(typeof e) //number

