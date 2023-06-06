//https://www.youtube.com/watch?v=yj_14t67Bh0 - explanation

//my Initial solution
function dutch_flag_sort(arr) {
  let startIndex = 0, endIndex = arr.length-1, currentIndex = 0;
  while(currentIndex < endIndex) {
    let currentNumber = arr[currentIndex];
    //This case be further optimized
    if(currentNumber == 0) {
      //next 0 is to be inserted here only
      if(startIndex == currentIndex) currentIndex++;
      // we need to swap 0 with 1
      else [arr[currentIndex], arr[startIndex]] = [arr[startIndex], arr[currentIndex]];
      startIndex++;
    }
    else if(currentNumber == 1) currentIndex++;
    else  {
        [arr[endIndex],arr[currentIndex]] = [arr[currentIndex],arr[endIndex]];
        endIndex--;
    }
    
  }
}

/**
 * Optimized solution, course solution
 */

function dutch_flag_sort(arr) {
  /* 
  startIndex -numbers before startingIndex are 0. in otherwords, next 0 needs to be inserted at startingIndex
  endIndex -numbers after endIndex are 2, in other words next 2 needs to be inserted at this position
  current iterated position is currentIndex
  */
  let startIndex = 0, currentIndex = 0, endIndex = arr.length-1;
  //because after endIndex we have 2's only. which are already at their correct position
  while(currentIndex <= endIndex) {
    switch(arr[currentIndex]) {
      /**
       * Because number between startIndex and currentIndex can be 1 only. so we are incrementing currentIndex also.
       * In a edge case we can have situation where we have encountered only 0's till now, in that case startIndex and
       *  currentIndex are equal.
       */
      case 0:
        [arr[startIndex], arr[currentIndex]] = [arr[currentIndex],arr[startIndex]];
        startIndex++;
        currentIndex++;
        break;
      /**
       * We are putting 0 and 2 at right places. so 1 will automatically be at right place
       */
      case 1:
        currentIndex++;
        break;
      case 2:
        /**
         * Put current 2 at its right position. do not increment currentIndex because at currentIndex we can have either
         * 0 or 1. we will handle it in next iteration.
         */
        [arr[currentIndex],arr[endIndex]] = [arr[endIndex],arr[currentIndex]];
        endIndex--;
        break;
    }

  }
}





let arr1 = [1, 0, 2, 1, 0];
let arr2 = [2, 2, 0, 1, 2, 0];

dutch_flag_sort(arr1);
dutch_flag_sort(arr2);

console.log(arr1);
console.log(arr2);
