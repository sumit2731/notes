/**
 * Write a function called "stringifyNumbers"  which takes in an object and finds all of the values which are 
 *  numbers and converts them to strings. Recursion would be a great way to solve this!
 */


/**
 * My Solution and Tutorial Solution
 */
 
function stringifyNumbers(obj) {
    let newObj = {};
    for (let property in obj) {
        if (typeof obj[property] == "object" && !Array.isArray(obj[property])) newObj[property] = stringifyNumbers(obj[property]);
        else if (typeof obj[property] == "number") newObj[property] = obj[property].toString();
        else newObj[property] = obj[property];
    }
   return newObj;
}
