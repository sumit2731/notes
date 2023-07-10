function subsets(nums) {
  let result = [[]];
  function recurse(index, currentArr) {
    for(let i = index; i< nums.length; i++) {
      currentArr.push(nums[i]);
      result.push([...currentArr]);
      recurse(i+1, currentArr);
      currentArr.pop();
    }
  }
  recurse(0, []);
  return result;
}


console.log(subsets([1,2,3,4]));