/* 
same as 3 but number of arguments are diffrent 



    sum(1)()
    sum(1,2,3..n)(5,6,7,n)(n) ()
    sum(1)(2)(3)()

*/

function sum(...numbers) {
    let tempSum = numbers.reduce((accum, number) => accum +number)
    return function wrapperFunction(...numbers2) {
        if(numbers2.length > 0) {
            tempSum += numbers2.reduce((accum, number) => accum + number)
            return wrapperFunction;
        }
        else return tempSum;   
    }
}

console.log(sum(1,2,3)(4,5,6)());

/**
 * Approach 2
 */

function add(...args) {
    let a = args.reduce((a, b) => a + b, 0)
    return function(...args){
      let b = args.reduce((a, b) => a + b, 0)
      if(b){
        return add(a+b)
      }
      return a
    }
}

console.log(add(1,2,3)(4,5,6)());