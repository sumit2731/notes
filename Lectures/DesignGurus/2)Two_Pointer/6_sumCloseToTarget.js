/**
 * My Approach - As good as course solution but in my solution because code is splitted in 2 parts,
 * some comparisons are needed twice. so course solution is better
 */

function tripletSum(arr, targetSum) {
  arr = arr.sort((a, b) => a - b);
  let minDiff = Infinity,
    closestTripletSum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let { minDiff: currentMinDiff, closestPairSum: currentClosestPairSum } =
      searchPair(arr, i + 1, targetSum - arr[i]);
    let currentTripletSum = arr[i] + currentClosestPairSum;
    if (currentMinDiff === 0) return currentTripletSum;
    else if (currentMinDiff < minDiff) {
      minDiff = currentMinDiff;
      closestTripletSum = currentTripletSum;
    } else if (
      currentMinDiff === minDiff &&
      closestTripletSum > currentTripletSum
    ) {
      closestTripletSum = currentTripletSum;
    }
  }
  return closestTripletSum;
}

function searchPair(arr, left, targetSum) {
  let right = arr.length - 1;
  let closestPairSum = Infinity,
    minDiff = Infinity;
  let currentMinDiff, currentPairSum;
  while (left < right) {
    currentPairSum = arr[left] + arr[right];
    currentMinDiff = targetSum - currentPairSum;
    if (
      minDiff > Math.abs(currentMinDiff) ||
      (minDiff === Math.abs(currentMinDiff) && closestPairSum > currentPairSum)
    ) {
      minDiff = Math.abs(currentMinDiff);
      closestPairSum = currentPairSum;
    }
    if (currentMinDiff > 0) left++;
    else if (currentMinDiff < 0) right--;
    else break;
  }
  return { minDiff, closestPairSum };
}

console.log(tripletSum([0, 0, 1, 1, 2, 6], 5));

/**
 * @CourseSolution - In MY Implementation
 */

function triplet_sum_close_to_target(arr, targetSum) {
  arr = arr.sort((a, b) => a - b);
  let minDiff = Infinity,
    minDiffSum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    //skipping duplicates
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      let currentDiff = targetSum - currentSum;
      if (currentDiff === 0) return targetSum;
      if (
        minDiff > Math.abs(currentDiff) ||
        (minDiff === Math.abs(currentDiff) && minDiffSum > currentSum)
      ) {
        minDiff = Math.abs(currentDiff);
        minDiffSum = currentSum;
      }
      if (currentDiff > 0) left++;
      else if (currentDiff < 0) right--;
    }
  }
  return minDiffSum;
}

/**
 * @CourseSoltion - In MY CourseIMplementation
 */
function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        // we've found a triplet with an exact sum
        return targetSum; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we
      // have more than one solution
      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }

      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}
