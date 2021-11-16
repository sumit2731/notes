const Deque = require('./collections/deque'); //http://www.collectionsjs.com


function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
    //n
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    //n
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = new Deque();
    //n
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}