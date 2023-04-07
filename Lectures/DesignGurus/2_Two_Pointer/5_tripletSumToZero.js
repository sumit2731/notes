/**
 * @MySolution - As good as course solution. coursse solution just uses 2 diffrent functions
 */

function tripletSumToZero(arr) {
  arr = arr.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i <= arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let requiredSum = -1 * arr[i];
    let left = i + 1,
      right = arr.length - 1;
    while (right > left) {
      let tempSum = arr[left] + arr[right];
      if (tempSum === requiredSum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        while (left > right && arr[left] === arr[left - 1]) left++;
        right--;
        while (left > right && arr[right] === arr[right + 1]) right--;
      } else if (tempSum < requiredSum) {
        left++;
        while (left < right && arr[left] === arr[left - 1]) left++;
      } else {
        right--;
        while (left < right && arr[right] === arr[right + 1]) right--;
      }
    }
  }
  return triplets;
}

/**
 * @CourseSolution
 */
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    // skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}
