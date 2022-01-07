const triplet_with_smaller_sum = function(arr, target) {
  let count = 0;  let resultArray = [];
  arr = arr.sort((a,b) => a-b);
  // TODO: Write your code here
  for(let i = 0; i<=arr.length -3; i++) {
    let currentTarget = target - arr[i];
    let start = i +1 , end = arr.length-1;
    while(end > start) {
      let currentSum = arr [i] + arr[start] + arr[end];
      if(currentSum < target) {
        let tempEnd = end;
        while(start < tempEnd) {
          resultArray.push(arr[i], arr[start], arr[tempEnd]);
          tempEnd--;
        }
        start++;
      }
      else {
        end--;
      }
    }
  }
  return resultArray;
};
