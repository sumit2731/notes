/**
 * @MySolution
 */
function find_permutation(str,pattern) {
    let patternDic = {}, windowStart = 0, windowEnd = 0, matchedCharCount = 0;
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
            if(matchedCharCount == Object.keys(patternDic).length) return true;
        }
    }
    return false;
    
}

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);


/**
 * @CourseSolution
 */

function find_permutation2(str, pattern) {
    let windowEnd = 0, windowStart = 0, patternDic = {}, matchedChars = 0;
    for(let char of pattern) patternDic[char] = (patternDic[char]|| 0) + 1;
    for(windowEnd = 0; windowEnd< str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        if(rightChar in patternDic) {
            patternDic[rightChar]--;
            if(patternDic[rightChar] == 0) matchedChars++;
        }
        if(matchedChars == Object.keys(patternDic).length) return true;
        if(windowEnd >= pattern.length-1) {
            let leftChar = str[windowStart];
            windowStart++;
            if(leftChar in patternDic) {
                patternDic[leftChar]++;
                if(patternDic[leftChar] == 1) matchedChars--;
            }
        }
    }
    return false;
}

// console.log(`Permutation exist: ${find_permutation2('oidbcaf', 'abc')}`);
// console.log(`Permutation exist: ${find_permutation2('odicf', 'dc')}`);
// console.log(`Permutation exist: ${find_permutation2('bcdxabcdy', 'bcdyabcdx')}`);
// console.log(`Permutation exist: ${find_permutation2('aaacb', 'abc')}`);

