// This is a JavaScript Quiz from BFE.dev


/**
 * Function declaration happens in first phase, varible assignment in second phase - i.e memory is allocate to function if first 
 *  phase iteself, in second phase function declaration is not eveluated as it is already eveluated in first phase.
 * 
 * here in second phase a is assigned value 2. function declaraed is not evealusted in phase 2 as it is already done in phase 1.
 * so variable asisgnment overrides the function decalartion
 */
var a = 1
function a() {
}

console.log(typeof a) //number


//if we mix function assignment and declaration in same xpression, then function declaration is ignored. here e is not defined
var e = 1
const f = function e() {} // this as good as e is not dfined

console.log(typeof e) //number

