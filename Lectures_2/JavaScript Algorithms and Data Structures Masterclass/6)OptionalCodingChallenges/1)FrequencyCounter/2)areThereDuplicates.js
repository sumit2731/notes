/**
 *Implement a function called "areThereDuplicates"  which accepts a variable number of arguments and
  checks whether there are any duplicates among the arguments passed in.  You can solve this using
  the frequency counter pattern OR the multiple pointers pattern.
 */

function areThereDuplicates() {
  let frequnecyObj = {};
  for (val in arguments) {
    frequnecyObj[arguments[val]] = (frequnecyObj[arguments[val]] || 0) + 1;
  }

  for (let key in frequnecyObj) {
    if (frequnecyObj[key] > 1) return true;
  }
  return false;
}

//console.log(areThereDuplicates(9, 9, 1));
console.log(areThereDuplicates(9, 1, 8,7,9));