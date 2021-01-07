/**
 * My_Approach
 */

let finalArray = [];
function flatten(array) {
    for (let item of array) {
        if (Array.isArray(item)) flatten(item);
        else finalArray.push(item);
    }
    return finalArray;
}


/**
 * Course_Solution
 */
function flatten2(array) {
    let newArray = [];
    for(let item of array) {
        if (Array.isArray(item)) newArray = newArray.concat(flatten2(item));
        else newArray.push(item);
    }
    return newArray;
}

console.log(flatten([1, 2, [3, [4,5]],6]));