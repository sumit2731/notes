/**
 * Write a function which accepts an array of arrays and returns a new array with all values flattened.
 */

/* 
*Course as well as my solution
*/
function flatten(array) {
    let newArray = [];
    for(let item of array) {
        if (Array.isArray(item)) newArray = newArray.concat(flatten(item));
        else newArray.push(item);
    }
    return newArray;
}

console.log(flatten([1, 2, [3, [4,5]],6]));