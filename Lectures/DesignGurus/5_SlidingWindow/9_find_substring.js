/**
 * @CourseAs_well_as_my_solution
 */

function find_substring(str, pattern) {
    let windowEnd = 0, windowStart = 0, patternDic = {}, matchedCharacters= 0, smallestSubstr = '';
    for(let char of pattern) patternDic[char] = (patternDic[char] || 0) + 1;
    for(windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        if(rightChar in patternDic) {
            patternDic[rightChar]--;
            if(patternDic[rightChar] == 0) matchedCharacters++;
        }
        while(matchedCharacters == Object.keys(patternDic).length) {
            if(!(smallestSubstr) ||(smallestSubstr.length > windowEnd-windowStart+1)) {
                smallestSubstr = str.slice(windowStart,windowEnd+1);
            }
            let leftChar = str[windowStart];
            windowStart++;
            if(leftChar in patternDic) {
                if(patternDic[leftChar] == 0) matchedCharacters--;
                patternDic[leftChar]++;
            }
        }
    }
    return smallestSubstr;
}

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('aabdec', 'abac'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

/**
 * @
 */