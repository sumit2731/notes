/**
 * @MySolution
 */

function goodPairs(nums) {
  let numDic = {},
    goodPairs = [];
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (numDic[currentNum]) {
      for (let index of numDic[currentNum]) {
        goodPairs.push([index, i]);
      }
      numDic[currentNum].push(i);
    } else numDic[currentNum] = [i];
  }
  return goodPairs.length;
}

/**
 * @Course Solution
 */

function goodPairs2(nums) {
  let numDic = {},
    goodPairLength;
  for (let i = 0; i < nums.length; i++) {
    numDic[nums[i]] = (numDic[nums[i]] || 0) + 1;
    goodPairLength += numDic[nums[i]] - 1;
  }
  return goodPairLength;
}
