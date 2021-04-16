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
/**
 * Alternate solution given in comments
 */

function stringifyNumbers(obj) {
  if (!Object.keys(obj).length) return {};
 
  const key = Object.keys(obj)[0];
  const { [key]: val, ...left } = obj;
 
  if (Number.isInteger(val)) {
    obj[key] = String(val);
  } else if (typeof val === 'object') {
    obj[key] = stringifyNumbers(val);
  }
 
  return {
    ...obj,
    ...stringifyNumbers(left),
  };
}

console.log(stringifyNumbers({a:1, b:2,c:3}));