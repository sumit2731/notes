function getMaxSubSum(arr) {
  let maxSum = -Infinity, maxStart = 0, maxEnd = 0, currentSum = 0, currentStart = 0, currentEnd = 0;
  for(i =0; i< arr.length; i++) {
    currentSum += arr[i];
    if(arr[i] >= 0) {
      currentEnd = i;
      if(currentSum > maxSum) {
        maxSum = currentSum;
        maxStart = currentStart
        maxEnd = currentEnd
      }
    } else {
      if(currentSum < 0) {
        currentStart = i+1;
        currentEnd = i+1;
        currentSum = 0;
      }
      else {
        currentEnd = i;
      }
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([100, -9, 2, -3, 5]));