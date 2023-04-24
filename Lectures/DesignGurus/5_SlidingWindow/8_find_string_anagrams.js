/**
 * @CourseSolution - Also my 1st approach after seeing the course solution of last question
 */
function find_string_anagrams(str, pattern) {
    let windowEnd = 0, windowStart = 0, indexes = [], patternDic= {}, currentPatternDic = {}, matchedChars = 0;
    for(let char of pattern) patternDic[char] = (patternDic[char] || 0) + 1;
    currentPatternDic = {...patternDic};
    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        if(rightChar in currentPatternDic) {
            currentPatternDic[rightChar]--;
            if(currentPatternDic[rightChar] === 0) matchedChars++;
        }
        if(matchedChars == Object.keys(currentPatternDic).length) {
            indexes.push(windowStart);
            // let leftChar = str[windowStart]
            // windowStart = windowStart+1;
            // currentPatternDic[leftChar]++;
            // matchedChars--;
            // continue;
        }
        if(windowEnd-windowStart+1 == pattern.length) {
            let leftChar = str[windowStart];
            windowStart++;
            if(leftChar in currentPatternDic) {
                if(currentPatternDic[leftChar] === 0) matchedChars--;
                currentPatternDic[leftChar]++;
            }
        }
    }
    return indexes; 
}

/**
 * @Solution using approach that I used in last question
 */
function find_string_anagrams2(str,pattern) {
    let patternDic = {}, windowStart = 0, windowEnd = 0, matchedCharCount = 0, indexes = [];
    for(let char of pattern) patternDic[char] = (patternDic[char] || 0) + 1;
    for(windowEnd = 0; windowEnd <str.length; windowEnd++ ) {
        let currentChar = str[windowEnd];
        while((!(currentChar in patternDic) ||(patternDic[currentChar] < 1)) && (windowEnd > windowStart)) {
            let leftChar = str[windowStart];
            if(patternDic[leftChar] == 0) matchedCharCount--;
            patternDic[leftChar]++;
            windowStart++;
        }
        if(!patternDic[currentChar]) {
            windowStart = windowEnd+1;
        } else {
            patternDic[currentChar]--;
            if(patternDic[currentChar] == 0) matchedCharCount++
            if(matchedCharCount == Object.keys(patternDic).length) indexes.push(windowStart);
        }
    }
    return indexes;
    
}

console.log(find_string_anagrams2('ppqp', 'pq'));
console.log(find_string_anagrams2('abbcabc', 'abc'));