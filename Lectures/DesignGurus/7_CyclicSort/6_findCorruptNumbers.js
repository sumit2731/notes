/**
 * @MySolution - Better Than Course Solution
 */

function find_corrupt_numbers(nums) {
    let duplicateNumber, currentIndex = 0, missingIndex;
    while(currentIndex < nums.length) {
        if(nums[currentIndex] == currentIndex+1) currentIndex++;
        else {
            let swapIndex = nums[currentIndex]-1;
            if(nums[swapIndex] == nums[currentIndex]) {
                duplicateNumber = nums[swapIndex];
                missingIndex = currentIndex;
                currentIndex++;
            }
            else [nums[swapIndex], nums[currentIndex]] = [nums[currentIndex], nums[swapIndex]]
        }
    }
    return [duplicateNumber, missingIndex+1];
}

/**
 * @CourseSolution
 */

function find_corrupt_numbers2(nums) {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
    }
    for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return [nums[i], i + 1];
      }
    }
    return [-1, -1];
}

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));