/* 
Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the 
length of the longest substring having the same letters after replacement.




*/

/* 
Course Solution
*/

function length_of_longest_substring(str, k) {
  let windowStart = 0, maxLength = 0, maxRepeatLetterCount = 0, frequencyMap = {};
  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
  
  
  //console.log(length_of_longest_substring('aabccbb', 2));
  // console.log(length_of_longest_substring('abbcb', 1));
  // console.log(length_of_longest_substring('abccde', 1));
  console.log(length_of_longest_substring('aabbaab', 2));

  /* 
  Time Complexity
    The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements, and the inner while 
    loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is 
    asymptotically equivalent to O(N)O(N).



  similar problem -
  Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the 
    longest contiguous subarray having all 1s.
  Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
  Output: 6
  Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
  */

/* 
My logic based on course logic, but it also tells where to replace alphabets
*/

function longestString2(str, k) {
    
  let strObj = {}; currentWindowStart =0, currentWindowEnd = 0, maxLength = 0, maxFrequencyCount = 0, 
  finalWindowStart = 0, finalWindowEnd = 0, newWindow = true , maxFreqChar = str[0];
  for(currentWindowEnd = 0; currentWindowEnd< str.length; currentWindowEnd++) {
      let currentChar = str[currentWindowEnd];
      strObj[currentChar] = (strObj[currentChar] || 0) + 1;
      if(maxFrequencyCount < strObj[currentChar]) {
          maxFrequencyCount = strObj[currentChar];
          newWindow = true;
          finalWindowStart = currentWindowStart;
          maxFreqChar = currentChar;
      }
      let currentWindowLength = currentWindowEnd-currentWindowStart+1;
      if((currentWindowLength - maxFrequencyCount === k) && newWindow) {
          maxLength = currentWindowLength;
          newWindow = false;
          finalWindowEnd = currentWindowEnd;
      } else if(currentWindowLength - maxFrequencyCount > k) {
          let currentWindowStartChar = str[currentWindowStart];
          currentWindowStart++;
          strObj[currentWindowStartChar]--;
          newWindow = false;
      }
  }
  if(newWindow) {
      finalWindowEnd = str.length -1;
      maxLength = finalWindowEnd- finalWindowStart + 1;
  }
  console.log("Final Window Start = " + finalWindowStart);
  console.log("Final Window End = " + finalWindowEnd);
  console.log("Final Length = " + maxLength);
  console.log("Max Freq Charact = " +maxFreqChar);
}