/**
 * @MySolution - same complexity as course. but course solution combines 2 conditions into 1 and
 *  hence it is bit concise.
 */

function find_first_smallest_missing_positive(nums) {
    let currentIndex = 0;
    while(currentIndex < nums.length) {
        //second is very important condition
        if((nums[currentIndex] > 0) && (nums[currentIndex] <= nums.length) ) {
            if(nums[currentIndex] == currentIndex+1) currentIndex++;
            else {
                let swapIndex = nums[currentIndex]-1;
                if(nums[currentIndex] == nums[swapIndex]) currentIndex++;
                else {
                    [nums[currentIndex],nums[swapIndex]] = [nums[swapIndex],nums[currentIndex]];
                }
            }
        }
        else currentIndex ++;
    }
    
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] != i+1) return i+1;
    }
    //missed this edge case
    return nums.length+1;
}

/**
 * Course Solutiuion
 */

function find_first_smallest_missing_positive2(nums) {
    let i = 0;
    n = nums.length;
    while (i < n) {
      j = nums[i] - 1;
      if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
    }
    for (i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    return nums.length + 1;
  }
  
  
  console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
  console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
  console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));
  