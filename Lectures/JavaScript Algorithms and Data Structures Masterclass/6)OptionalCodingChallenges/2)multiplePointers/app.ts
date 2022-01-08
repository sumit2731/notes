const find_subarrays = function(arr, target) {
  let result = [];
  // TODO: Write your code here
  //n
  for(let end = 0; end<= arr.length ; end++) {

    let currentProduct = arr[end], currentSubArray = [arr[end]], start = end -1;
    //n
    while(target > currentProduct) {
      //n
      result.push([...currentSubArray]);
      if(start >= 0) {
        currentProduct *= arr[start];
        //n
        currentSubArray.unshift(arr[start]);
        start--;
      }
      else break;
    }
  }
  return result;
};
console.log(find_subarrays([2,5,3,10],30));