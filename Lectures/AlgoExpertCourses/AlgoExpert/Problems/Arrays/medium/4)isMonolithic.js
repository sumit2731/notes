/* 
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic.
  
  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.
 
  Non-increasing elements aren't necessarily exclusively decreasing; they simply
  don't increase. Similarly, non-decreasing elements aren't necessarily
  exclusively increasing; they simply don't decrease.
*/


function isMonotonic(arr) {
	if(arr.length === 0 || arr.length === 1 || arr.length ===2) return true;
	let flag = false, isAsc = true;
	for(let i = 0; i < arr.length-1; i++) {
		if(!flag && (arr[i] !== arr[i+1])) {
			flag = true;
			isAsc = (arr[i+1] > arr[i]) ? true: false;
		}
		else if(flag) {
			if(isAsc && (arr[i+1] < arr[i])) return false;
			else if(!isAsc && (arr[i+1] > arr[i])) return false;
		}
	}
	return true;
}

let arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];
console.log(isMonotonic(arr));