/**
 * @MySolution Better Than Course Solution
 */
function find_all_duplicates(nums) {
    let duplicateNumbers = [], currentIndex = 0;
    // TODO: Write your code here
    while(currentIndex < nums.length) {
        if(nums[currentIndex] ==  currentIndex+1) currentIndex++;
        else {
            let swapIndex = nums[currentIndex]-1;
            if(nums[currentIndex] == nums [swapIndex]) {
                duplicateNumbers.push(nums[currentIndex]);
                currentIndex++;
            }
            else [nums[currentIndex], nums[swapIndex]] = [nums[swapIndex], nums[currentIndex]]
        }
    }
    return duplicateNumbers;
}

/**
 * @CourseSolution - Takes one iteration more
 */

function find_all_duplicates2(nums) {
    let i = 0;
    while (i < nums.length) {
      j = nums[i] - 1;
      if (nums[i] != nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i++;
      }
    }
  
    duplicateNumbers = [];
    for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicateNumbers.push(nums[i]);
      }
    }
  
    return duplicateNumbers;
  }

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));