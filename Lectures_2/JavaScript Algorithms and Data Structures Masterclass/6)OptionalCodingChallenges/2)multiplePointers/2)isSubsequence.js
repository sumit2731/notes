/**
 * Write a function called "isSubsequence"  which takes in two strings and checks whether the 
 * characters in the first string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear
 * somewhere in the second string, without their order changing
 * 
 * Time Complexity - O(N +M)
 * Space Complexity - O(1)
 * 
 * isSubsequence('abc',''abracadabra'') => true
 * isSubsequence('sing','string') => true
 * isSubsequence('abc',''abracadabra'')
 * 
 * 
 * 
 */
function isSubsequence(subStr, mainStr) {
 let subStrPointer = 0, mainStrPointer = 0, matchCount = 0;
 while(mainStrPointer < mainStr.length) {
    if(mainStr[mainStrPointer] == subStr[subStrPointer]) {
        subStrPointer++;
        matchCount++;
        if(matchCount == subStr.length) return true;  
    }
    mainStrPointer++;
 }
 return false;   
}

/**
 * Solution by Reccursion
 */
function isSubsequence2(subStr,mainStr) {
    if(subStr.length == 0) return true;
    if(mainStr.length == 0) return false;
    if(subStr[0] == mainStr[0]) return isSubsequence2(subStr.slice(1), mainStr.slice(1));
    else return isSubsequence2(subStr, mainStr.slice(1));
}