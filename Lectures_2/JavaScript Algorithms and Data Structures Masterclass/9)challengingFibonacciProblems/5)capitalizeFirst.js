/**
 * write a recursive function called "capitalizeFirst" . Given an array of strings, capitalize 
 * the first letter of each string in the array.
 */

 /**
  * My Approach
  */
function capitalizeFirst(array) {
    if (array.length == 1) return capitalize(array[0]);
    return [capitalize(array[0])].concat(capitalizeFirst(array.slice(1)));
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/**
 * Course Approach
*/

function capitalizeFirst2(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst2(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst2(["sumeet", "sood", "archana"]));


