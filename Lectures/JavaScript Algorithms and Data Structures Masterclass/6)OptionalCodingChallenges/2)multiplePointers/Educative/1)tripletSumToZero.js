/* 
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

*/
/* 
My Solution
*/
const search_triplets = function(arr) {
    arr = arr.sort((a,b) => a-b);
    let triplets = [];
    for(let i = 0 ; i < arr.length; i++) {
      if(i > 0 && arr[i] === arr[i-1]) continue;
      let currentRequiredSum = -1 *arr[i];
      let left = i+1, right = arr.length-1;
      while(right > left) {
        let tempSum = arr[left] + arr[right];
        if(tempSum === currentRequiredSum) {
          triplets.push([arr[i],arr[left],arr[right]]);
          left++;
          while(arr[left-1] === arr[left]) left++;
          right--;
          while(arr[right+1] === arr[right]) right--;
        }
        else if(tempSum > currentRequiredSum) right--;
        else left++;
          
      } 
    }   
    return triplets;
};
  
let triplet = search_triplets([-3,-3,0,1,2,-1,1,-2]);
console.log(triplet.length);
console.log(triplet);