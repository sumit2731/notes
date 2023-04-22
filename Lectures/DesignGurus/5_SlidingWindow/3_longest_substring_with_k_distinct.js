function longest_substring_with_k_distinct(str, k) {
    let maxLength = -Infinity, windowStart = 0, charDic = {}, currentCharCount = 0;
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentChar = str[windowEnd]
        if(!charDic[currentChar]) currentCharCount++;
        charDic[currentChar] = (charDic[currentChar] || 0) + 1;
        while(currentCharCount > k) {
            let startingChar = str[windowStart];
            charDic[startingChar]--;
            if(charDic[startingChar] === 0) {
                currentCharCount--;
                delete charDic[startingChar];
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
        
    }
    return maxLength;
}

console.log(longest_substring_with_k_distinct('araaci',2));