/**
 * @MyCode
 */

function find_subarrays(arr, target) {
  let left = 0,
    right = 0,
    subArrays = [],
    currentProduct = 1;
  while (right < arr.length) {
    currentProduct *= arr[right];
    while (currentProduct >= target) {
      currentProduct = currentProduct / arr[left];
      left += 1;
    }
    let tempSubArray = [];
    for (let j = right; j >= left; j--) {
      tempSubArray.push(arr[j]);
      subArrays.push([...tempSubArray]);
    }
    right++;
  }
  return subArrays;
}

let arr1 = [2, 5, 3, 10];
let arr2 = [8, 2, 6, 5];

console.log(find_subarrays(arr1, 30));
console.log(find_subarrays(arr2, 50));

/**
 * Course Solution
 */

//same as mine
