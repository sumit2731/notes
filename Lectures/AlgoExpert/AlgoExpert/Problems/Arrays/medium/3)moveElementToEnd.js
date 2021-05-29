/**
  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.
 */

function moveElementToEnd(array, toMove) {
  // Write your code here.
	let start = 0, end = array.length-1;
	while(start < end) {
		while( array[end] === toMove) end--;
		if(array[start] === toMove) [array[start],array[end]] =  [array[end],array[start]]
		start++;
	}
	return array;
}

let arr = [2,1,2,2,2,3,4,2];

console.log(moveElementToEnd(arr,2));

function moveElementToEnd2(arr,toMove) {
    let start = 0, end = arr.length-1;
    while(arr[end] === toMove) end--;
    while(start < end) {
        if(arr[start] === toMove) {
            [arr[start], arr[end]] = [arr[end],arr[start]];
            while(arr[end] === toMove) end--;
        }
        start++;
    }
    return arr
}

console.log(moveElementToEnd2(arr,2));