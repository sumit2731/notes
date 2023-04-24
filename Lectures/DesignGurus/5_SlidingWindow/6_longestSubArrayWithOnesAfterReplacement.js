function length_of_longest_substring(str, k) {
    let windowStart = 0, windowEnd = 0, maxLength = 0, charDic = {};
    for(windowEnd = 0; windowEnd < str.length ; windowEnd++) {
        let rightChar = str[windowEnd];
        charDic[rightChar] = (charDic[rightChar] || 0) + 1;
        let replacementNeeded = windowEnd- windowStart + 1 -charDic[1];
        if(replacementNeeded > k) {
            let leftChar = str[windowStart];
            charDic[leftChar]--;
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }
    return maxLength;
  }