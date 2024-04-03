function containsDuplicate(numArr) {
  let numDic = {};
  for (let num of numArr) {
    if (numDic[num]) return true;
    else numDic[num] = true;
  }
  return false;
}

const nums1 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(containsDuplicate(nums4)); // Expected output: true
