const search_triplets = function(arr) {
  triplets = [];
  // TODO: Write your code here
  arr = arr.sort((num1 , num2) => num1-num2);
  for(let i = 0; i<=arr.length-3; i++) {
    if((i > 0) && arr[i] === arr[i-1]) continue;
    let requiredSum = (-1) * (arr[i]);
    let start = i+1, end = arr.length-1;
    while(end > start) {
      let currentSum = arr[start] + arr[end];
      if(currentSum === requiredSum) {
        triplets.push([arr[i],arr[start],arr[end]]);
        start++;
        end--;
        while(arr[start] === arr[start-1]) start++;
        while(arr[end] === arr[end+1]) end--;
      } else if(currentSum > requiredSum) {
        end--;
      }
      else {
        start++;
      }
    }
  }
  return triplets;
};

//console.log(search_triplets([-3,0,1,2,-1,1,-2]));
console.log(search_triplets([-3,0,1,2,2,2,2,-1,1,1,1-2]));