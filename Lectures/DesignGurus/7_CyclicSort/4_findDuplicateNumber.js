/**
 * @My_Solution and Course Solution
 */

function find_duplicate(nums) {
    let currentIndex = 0;
    while(currentIndex < nums.length) {
        if(nums[currentIndex] !== currentIndex+1) {
            let swapIndex = nums[currentIndex]-1;
            if(nums[currentIndex] != nums[swapIndex]) [nums[currentIndex], nums[swapIndex]] = [nums[swapIndex], nums[currentIndex]]
            else return nums[swapIndex]
        }
        else currentIndex++;
    }
}

//Note - this problem needs to be looked once i cover the fast and slow pointers

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));