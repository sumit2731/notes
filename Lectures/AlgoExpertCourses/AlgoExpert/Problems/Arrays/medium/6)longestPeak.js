/**
 * 
  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.A peak is defined as adjacent integers in the array that are strictly
  increasing until they reach a tip (the highest value in the peak), at which point they become sttictly
  decreasing. At least three integers are required to form a peak.
 */

  //my Solution

  function longestPeak(array) {
	let start = 0, slopeReached = false, maxLength = 0,decreasingTrend = false,increasingTrend = false;
	for(let i = 1; i<array.length; i++) {
        let increasing = array[i] > array[i-1];
        let decreasing =
         array[i] < array[i-1];
        if(increasing) {
            if(slopeReached) {
                slopeReached = false;
                maxLength = Math.max(maxLength, i-start);
                start = i-1;
            }
            if(decreasingTrend) {
                start = i-1;
            }
            increasingTrend = true;
            decreasingTrend = false;
        }
        else if(decreasing) {
            if(increasingTrend) slopeReached = true;
            decreasingTrend = true;
            increasingTrend = false;
        }
		//equal
        else {
            if(slopeReached) {
                maxLength = Math.max(maxLength, i-start);
                slopeReached = false;
            }
            start = i;
            increasingTrend = false;
            decreasingTrend = false;
        }
	}
	if(slopeReached) maxLength = Math.max(maxLength, array.length-start);
	return maxLength;
	
}

//let arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
//console.log(longestPeak(arr))

//course solution
function longestPeak2(arr) {
    let i = 1, maxLength = 0;
    while(i < arr.length-1) {
        let isPeak = (arr[i-1] < arr[i]) && (arr[i] > arr[i+1]);
        if(isPeak) {
            let start = i-1;
            while((start >= 0) && (arr[start] >  arr[start-1])) start--;
            let end = i +1;
            while((end <= arr.length-1) && (arr[end] > arr[end+1] )) end++;
            maxLength = Math.max(maxLength,end-start+1);
            i = end;
        }
        else i++;
    }
    return maxLength;
}
let arr2 =  [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

console.log(longestPeak2(arr2));