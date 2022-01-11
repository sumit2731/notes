/* 
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the 
    target number.


    Input: [4, 1, 2, -1, 1, -3], target=1
    Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
    Explanation: Both the quadruplets add up to the target.

*/


const search_quadruplets = function(arr, target) {
    arr.sort((a ,b) => a-b);
    let quadruplets = [];
    
    for(let i = 0; i<=arr.length-4; i++) {
      
      if((i > 0) && (arr[i-1] === arr[i])) continue;
      
      for(let j = (i+1); j <= arr.length-3 ; j++) {
        
        if((j > (i+1)) && (arr[j-1] === arr[j])) continue;
        
        let start = j+1, end = arr.length-1 , requiredSum = target - arr[i] - arr[j];
        
        while(start < end) {
          let currentSum = arr[start] + arr[end];
          if(currentSum === requiredSum) {
            quadruplets.push([arr[i], arr[j], arr[start], arr[end]]);
            do {
              start++
            } while( arr[start] !== arr[start-1])
            do {
              end--
            } while( arr[end] !== arr[end+1])
          }
          else if(currentSum > requiredSum) {
            end--;
          }
          else {
            start++;
          }
        }
      
      }
    
    }
    return quadruplets;
  };
  
  
  let arr = [2,0,-1,1,-2,2];
  
  console.log(search_quadruplets(arr,2));
  