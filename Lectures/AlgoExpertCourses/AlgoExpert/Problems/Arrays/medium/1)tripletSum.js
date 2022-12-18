/**
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  O(n^2) time | O(n) space - where n is the length of the input array
 */


function tripleSum(arr, targetSum) {
    let tripletSum = [];
    //O(n logn)
    arr = arr.sort((a,b) => a-b);
    //O(n)
    for(let i = 0; i<arr.length-1; i++) {
        let left = i+1, right = arr.length-1;
        while(left < right) {
            let currentSum = arr[i] + arr [left] + arr [right];
            if(currentSum === targetSum) {
                tripletSum.push([arr[i],arr[left],arr[right]]);
                left++;
                right--;
            }
            else if(currentSum < targetSum) left++;
            else right--;
        }
    }
    return tripletSum;
}




let arr = [12,3,1,2,-6,5,-8,6];
console.log(tripleSum(arr,0));