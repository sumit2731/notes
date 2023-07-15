/**
 * Functional program is huge but one small part of it is that think and make the logic in the form of functions in your head
 * so we think all the logic into small reuseable components which are functions. important things in FP -
 *  1)reuseability
 *  2)modularity
 *  3)how use pass functions into diffrent functions
 *  4)pure functions
 *  5)composition of functions
 * 
 * Why code is good, one function has just one task
 */


const radius = [3,1,2,4];

//Only one job -calculates the area
const calculateArea = (radius) => Math.PI * radius * radius;
const calculateCircumference = (radius) => 2* Math.PI * radius;
const calculateDiameter = 2 * radius;


/**
 * Iterates through array, executes given cb for each element of array and pushes result into new array. then return new array
 */
const calculateLogic = function (radius,logicCb) {
    const output = [];
    for(let i = 0; i< radius.length; i++) {
        output.push(logicCb(radius[i]));
    }
    return output;
}

console.log(calculateArea([radius],calculateArea))
console.log(calculateCircumference([radius],calculateCircumference))
console.log(calculateDiameter([radius],calculateDiameter))