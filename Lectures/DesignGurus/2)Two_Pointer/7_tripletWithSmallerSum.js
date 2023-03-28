function triplet_with_smaller_sum(arr, target) {
  let tripletArray = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) continue;
    pair_with_smaller_sum(arr, i, target - arr[i], tripletArray);
  }
  return tripletArray;
}

function pair_with_smaller_sum(arr, i, target, tripletArray) {
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum < target) {
      let dummyRight = right;
      //missed this condition
      while (dummyRight > left) {
        tripletArray.push([arr[i], arr[left], arr[dummyRight]]);
        dummyRight--;
      }
      left++;
    } else right--;
  }
}
