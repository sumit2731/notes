/* 
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.
  
  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  Complexity-

  O(nlog(n) + mlog(m)) time | O(1) space - 
  n is the length of the first input array
  m is the length of the second input array
*/

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((n1,n2) => n1 -  n2);
	arrayTwo.sort((n1,n2) => n1 - n2);
	let indexOne = 0, indexTwo = 0 , pair = [], minDif = Infinity;
	while(indexOne < arrayOne.length && indexTwo  < arrayTwo.length) {
		let currentDif = Math.abs(arrayOne[indexOne] - arrayTwo[indexTwo]);
		if(currentDif === 0) return [arrayOne[indexOne],arrayTwo[indexTwo]]
		if(minDif > currentDif) {
			pair = [arrayOne[indexOne], arrayTwo[indexTwo]];
			minDif = currentDif;
		}
		if(arrayOne[indexOne] < arrayTwo[indexTwo]) indexOne++;
		else if(arrayOne[indexOne] > arrayTwo[indexTwo]) indexTwo++;
	}
	return pair;
}

let arr1 = [-1,5,10,20,28,3,18];
let arr2 = [26,134,135,15,17];
console.log(smallestDifference(arr1,arr2));