/* 
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given 
  pattern.
*/

//my solution - Derived from code

function find_substring2(str, pattern) {
  let windowStart = 0, patternObj = {}, minLengthStr = '' , matched = 0;
  for(let char of pattern) {
    patternObj[char] = (patternObj[char] || 0) + 1;
  }
  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if(rightChar in patternObj) {
      patternObj[rightChar]--;
      if(patternObj[rightChar] === 0) matched++;
    }

    while(matched === Object.keys(patternObj).length) {
      if(!minLengthStr || (minLengthStr.length >  windowEnd-windowStart+1) ) minLengthStr = str.slice(windowStart, windowEnd+1);
      let leftChar = str[windowStart];
      if(leftChar in patternObj) {
        patternObj[leftChar]++;
        if(patternObj[leftChar] > 0) matched--
      }
      windowStart++;
    }
  }
  return minLengthStr;
}