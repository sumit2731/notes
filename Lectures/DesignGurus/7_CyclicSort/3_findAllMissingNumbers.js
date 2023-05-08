/**
 * Course solution - simple but uses one extra iteration.
 *  I have used my syntax, see syntax of course also, it varies a bit
 */

function find_missing_numbers(nums) {
    let missingNumbers = [], currentIndex = 0;
    while(currentIndex< nums.length) {
      if(nums[currentIndex] == currentIndex+1) currentIndex++;
      else {
        let swapppedIndex = nums[currentIndex]-1;
        if(nums[currentIndex] == nums[swapppedIndex]) currentIndex++;
        else [nums[currentIndex], nums[swapppedIndex]] = [nums[swapppedIndex], nums[currentIndex]]
      }
    }
    currentIndex = 0;
    while(currentIndex < nums.length) {
      if(nums[currentIndex] !== currentIndex+1) missingNumbers.push(currentIndex+1);
      currentIndex++
    }
    return missingNumbers;
    
  }



function find_missing_numbers(nums) {
    let currentIndex = 0;
    while(currentIndex < nums.length) {
        let currentElement = nums[currentIndex];
        if(currentElement == undefined) {
            currentIndex++;
            continue;
        }
        //current element is either array, or single element at right place
        if((Array.isArray(currentElement)) || (nums[currentIndex] == currentIndex+1)) currentIndex++;
        //single lement is not at right place
        else {
           let swappedIndex = nums[currentIndex]-1, swappedElement = nums[swappedIndex]
           //at swapped index we have a array
           if(Array.isArray(swappedElement)) {
             swappedElement.push(currentElement);
             nums[currentIndex] = undefined;
             currentIndex++;
           }
           //at swappedIndex we have  right element
           else if(nums[swappedIndex] == swappedIndex+1) {
                nums[swappedIndex] = [nums[swappedIndex], currentElement];
                nums[currentIndex] = undefined;
           }
           //at swappedIndex we have wrongElement or we have undefined. so we swap without increasing index
           else {
            [nums[currentIndex], nums[swappedIndex]] = [nums[swappedIndex], nums[currentIndex]]
           }
        }
    }
    currentIndex = 0;
    let misingNumbers = [];
    while(currentIndex < nums.length) {
        if(nums[currentIndex] == undefined) misingNumbers.push(currentIndex+1);
        currentIndex++;
    }
    return misingNumbers;
}

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));