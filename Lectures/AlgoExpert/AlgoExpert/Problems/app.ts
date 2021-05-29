function longestPeak(array) {
  // Write your code here.
	let start = 0, expectedTrendIn = true, slopeReached = false, maxLength = 0,
			decreasing = false, isEqual = false, increasing = false;
	
	for(let i = 1; i<array.length; i++) {
		increasing = array[i] > array[i-1];
		decreasing = array[i] < array[i-1];
		isEqual = array[i] === array[i-1];
		if(!slopeReached && increasing) {}
		else if(isEqual) {
			if(slopeReached) maxLength = Math.max(maxLength, i-start);
				start = i;
		}
		else if(!slopeReached && decreasing) slopeReached = true;		
		else if(slopeReached && increasing) maxLength = Math.max(maxLength, i-start);
	}
	if(slopeReached) maxLength = Math.max(maxLength, array.length-start);
	return
	
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
