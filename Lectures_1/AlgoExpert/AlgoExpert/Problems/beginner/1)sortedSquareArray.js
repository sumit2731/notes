/* 
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.
*/

/* 
AlgoExpert Solution
Time Complexity - O(n)
Space Complexity - O(n)
*/
function sortedSquaredArray(array) {
	const newArr = new Array(array.length).fill(0);
	let startIndex = 0, endIndex = array.length-1;
	for(let i = array.length -1; i >= 0 ; i--) {
		let startIndexValue = Math.abs(array[startIndex]);
		let endIndexValue = Math.abs(array[endIndex]);
		if(startIndexValue > endIndexValue) {
			newArr[i] = startIndexValue * startIndexValue;
			startIndex +=1;
		}
		else {
			newArr[i] = array[endIndex] * array[endIndex];
			endIndex -= 1;
		}
	}
  return newArr;
}

/* 
Time Compelxity - O(n Logn)
Space Complexitty - O(n)
*/

function sortedSquaredArray(array) {
    array.sort((num1, num2) => Math.abs(num1) - Math.abs(num2));
    const newArray = [];
	for(let number of array) newArray.push(number * number);
	return newArray;
}



console.log(sortedSquaredArray([-25,-10,0,5,20]));