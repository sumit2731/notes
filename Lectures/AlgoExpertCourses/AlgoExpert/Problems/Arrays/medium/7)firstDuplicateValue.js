/**
 * Given an array of integers between  1 and n,  is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).

  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.

  Note that you're allowed to mutate the input array.
  
  time - O(n), space - O(1)
 */

function firstDuplicateValue(array) {
  // Write your code here.
	for(let value of array) {
		value = Math.abs(value);
		if(array[value-1] <0) return value;
		else array[value-1] *= -1;
	}
  return -1;
}