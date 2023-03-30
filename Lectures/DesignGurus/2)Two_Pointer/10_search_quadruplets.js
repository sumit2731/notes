/**
 * @MySolution - Same compleexity as course solution
 * Course solution is better because we do not have to itemrate over result of pair and triplet to
 *  get final result. but my solution we have to.
 */

function search_quadruplets(arr, target) {
  let quadruplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let triplets = search_triplets(arr, i + 1, target - arr[i]);
    for (let triplet of triplets) quadruplets.push([arr[i], ...triplet]);
  }
  return quadruplets;
}

function search_triplets(arr, left, targetSum) {
  let triplet = [];
  for (let i = left; i < arr.length; i++) {
    if (i > left && arr[i] === arr[i - 1]) continue;
    let pairs = search_pairs(arr, i + 1, targetSum - arr[i]);
    for (let pair of pairs) {
      triplet.push([arr[i], ...pair]);
    }
  }
  return triplet;
}

function search_pairs(arr, left, targetSum) {
  let right = arr.length - 1,
    resultArray = [];
  while (left < right) {
    let tempSum = arr[left] + arr[right];
    if (tempSum === targetSum) {
      resultArray.push([arr[left], arr[right]]);
      left++;
      while (arr[left] !== arr[left - 1] && left < right) left++;
      right--;
    } else if (tempSum < targetSum) left++;
    else right--;
  }
  return resultArray;
}

let arr1 = [4, 1, 2, -1, 1, -3];
let target1 = 1;

let arr2 = [2, 0, -1, 1, -2, 2];
let target2 = 2;

console.log(search_quadruplets(arr1, target1));
console.log(search_quadruplets(arr2, target2));

/**
 * @Course Solution
 */
function search_quadruplets2(arr, target) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs2(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}

function search_pairs2(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) {
      // found the quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}
