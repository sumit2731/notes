const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
console.log(curriedMultiply(5)(3));
// const curriedMultiply = function(a) {
//     return function (b) {
//         return a*b;
//     }
// }
const curriedMultiply5 = curriedMultiply(5);
console.log(curriedMultiply5(3));