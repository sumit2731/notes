/**
 * write a reccursive fucntion called "someRecursive"  which accepts an array and a callback. The function 
 * returns true if a single value in the array returns true when passed to the callback. Otherwise it returns 
 * false.
 */

 /**
 * My Solution
 */
 function someRecursive(array,callback) {
    if (array.length ==1) return callback(array[0]);
    return callback(array[0]) || someRecursive(array.slice(1),callback);
 }


 /**
 * Solution in Course
*/

function someRecursive2(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}