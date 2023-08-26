/**
 * Write a function that given a string returns its longest pallindrome substring
 * str = abaxyzzyxf
 * longestPallindromSubStr = xyzzyx
 * 
 * Note - Question similar to this was asked in Nvidia interview
 * https://www.educative.io/find-all-palindrome-substrings
 */


/**
 * @MySolution
 */

function findAllPallindromeInSubStrings(str, left, right) {
    if(str.length == 1) return str;
      let longestStr = '';
      while((left >= 0) && (right < str.length)) {
          if(str[left] != str[right]) break;
         longestStr = str.slice(left,right+1);
          left--;
          right++;
      }
      return longestStr;
}
  
function longestPalindromicSubstring(str) {
    let longestStr = '';
      for(let i = 0; i < str.length; i++) {
          let oddPallindromeStr = findAllPallindromeInSubStrings(str,i-1,i+1);
          if(oddPallindromeStr.length > longestStr.length) longestStr = oddPallindromeStr;
          let evenPallindromeStr = findAllPallindromeInSubStrings(str,i,i+1);
          if(evenPallindromeStr.length > longestStr.length) longestStr = evenPallindromeStr
      }
      return longestStr;
}

/**
 * @CourseSolution - Bit More Efficient (Here we are )
 */

function getLongestPallindromeFrom(str,left,right) {
    while((left >= 0) && (right < str.length)) {
        if(str[left] != str[right]) break;
        left--;
        right++;
    }
    return [left+1,right]
}

function longestPalindromicSubstring(str) {
    let currentLongest = [0,1];
    for(let i = 0; i < str.length; i++) {
        const odd = getLongestPallindromeFrom(str,i-1, i+1);
        const even = getLongestPallindromeFrom(str,i,i+1);
        const longest = (odd[1] - odd[0]) > (even[1] - even[0]) ? odd : even;
        if((currentLongest[1] - currentLongest[0]) < (longest[1] - longest[0])) currentLongest = longest;
    }
    return str.slice(currentLongest[0],currentLongest[1]);
}