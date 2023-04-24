/**
 * @MySolution
 */
function length_of_longest_substring(str,k) {
    let windowStart = 0, windowEnd = 0, maxLength = -Infinity,maxOccuringChar, charDic = {};
    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentChar = str[windowEnd];
        charDic[currentChar] = (charDic[currentChar] || 0) + 1;
        if(charDic[currentChar] > (charDic[maxOccuringChar] || 0)) maxOccuringChar = currentChar;
        let replacementsNeeded = windowEnd-windowStart+1 - charDic[maxOccuringChar];
        while(k < replacementsNeeded) {
            let leftChar = str[windowStart];
            windowStart++;
            charDic[leftChar] --;
            if(leftChar === maxOccuringChar) maxOccuringChar = getMaxOccuringChar(charDic, maxOccuringChar);
            replacementsNeeded = windowEnd-windowStart+1 - charDic[maxOccuringChar];
        }
        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
        
    }
    return maxLength; 
}

function getMaxOccuringChar(charDic,maxOccuringChar) {
    for(char in charDic) if(charDic[char] > charDic[maxOccuringChar]) return char;
    return maxOccuringChar;
}

console.log(length_of_longest_substring('aabccbb', 2));


/**
 * @CourseSolution - better one
 */

function length_of_longest_substring2(str,k) {
    let windowEnd = 0, windowStart = 0, maxLength = -Infinity, charDic = {}, maxCharCount = 0;
    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentChar = str[windowEnd];
        charDic[currentChar] = (charDic[currentChar] || 0) +1;
        maxCharCount = Math.max(maxCharCount,charDic[currentChar]);
        let replacementNeeded = windowEnd-windowStart+1-maxCharCount;
        if(replacementNeeded > k) {
            let leftChar = str[windowStart];
            charDic[leftChar]--;
            windowStart++;
            replacementNeeded = windowEnd-windowStart+1-maxCharCount;
        }
        maxLength = Math.max(maxLength, windowEnd-windowStart+1);
    }
    return maxLength;
}
console.log(length_of_longest_substring2('aabccbb', 2));