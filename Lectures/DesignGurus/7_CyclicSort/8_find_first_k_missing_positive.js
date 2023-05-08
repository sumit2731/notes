/**
 * @MySolution - same complexity as course. but course solution combines 2 conditions into 1 and
 *  hence it is bit concise.
 */

function find_first_k_missing_positive(nums,k) {
    let currentIndex = 0, missingNumbers = [], positiveNumbersOutsideArray = {};
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
        if(nums[i] != i+1) {
            missingNumbers.push(i+1);
            if(nums[i] > 0) positiveNumbersOutsideArray[nums[i]] = true;
            if(missingNumbers.length ==k) return missingNumbers
        }
    }
    let candidateNumber = nums.length+1;
    while(missingNumbers.length != k) {
        if(!(candidateNumber in  positiveNumbersOutsideArray)) missingNumbers.push(candidateNumber);
        candidateNumber++;
    }
    return missingNumbers;
}

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));