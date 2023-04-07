/**
 * @MySolution -  I missed the edge condition
 */

function shortest_window_sort(arr) {
  let left, right;

  //finding left of potential subarray
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      left = i;
      break;
    }
  }
  if (left === undfeined) return 0;
  //finding right of potential subrary
  for (let i = arr.length - 1; i > 1; i--) {
    if (arr[i] < arr[i - 1]) {
      right = i;
      break;
    }
  }
  let maxInSubArray = -Infinity,
    minInSubArray = Infinity;
  // find min and Max in potential subarray
  for (let i = left; i <= right; i++) {
    minInSubArray = Math.min(minInSubArray, arr[i]);
    maxInSubArray = Math.max(maxInSubArray, arr[i]);
  }
  //finding a element in left subarray which is greater than min in potential subarray
  for (let i = 0; i < left; i++) {
    if (arr[i] > minInSubArray) {
      left = i;
      break;
    }
  }

  for (let i = arr.length - 1; i > right; i--) {
    if (arr[i] < maxInSubArray) {
      right = i;
      break;
    }
  }

  return right - left + 1;
}

/**
 * @Course Solution
 */
function shortest_window_sort2(arr) {
  let low = 0,
    high = arr.length - 1;
  // find the first number out of sorting order from the beginning
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) {
    // if the array is sorted
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  // extend the subarray to include any number which is bigger than the minimum of
  // the subarray
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of
  // the subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}

console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));
