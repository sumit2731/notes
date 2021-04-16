/**
 *Implement a function called "areThereDuplicates"  which accepts a variable number of arguments and
  checks whether there are any duplicates among the arguments passed in.  You can solve this using
  the frequency counter pattern OR the multiple pointers pattern.
 */

function areThereDuplicates1() {
  return new Set(arguments).size !== arguments.length;
}

/**
 * Frequency Counter Approach
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
function areThereDuplicates2(...parameters) {
    let paramObj = {};
    for(let arg of parameters) {
        if(paramObj[arg]) return true;
        else paramObj[arg] = 1;
    }
    return false;
}

/**
 * Muliple Pointers Appraoch
 * Time Complexity - O(n logn)
 * Space Complexity - O(1)
 */
function areThereDuplicates3(...parameters) {
    parameters.sort();
    let firstPointer = 0, secondPointer = 1;
    while(firstPointer < parameters.length -1) {
      if(parameters[firstPointer] === parameters[secondPointer]) return true;
      firstPointer++;
      secondPointer++;
    }
    return false;
}

//console.log(areThereDuplicates(9, 9, 1));
console.log(areThereDuplicates(9, 1, 8,7,9));