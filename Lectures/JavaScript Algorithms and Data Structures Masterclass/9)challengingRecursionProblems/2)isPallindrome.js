/**
 * Write a function "isPalindrome" which returns true if string passed to it is pallindrome.
 */

 /**
  * My Solution
  */

function isPalindrome(string) {
    return string == reverse(string);
}

function reverse (string) {
    if (string.length == 1) return string[0];
    return string.slice(-1) + reverse(string.slice(0,string.length -1));
}


/**
 * Tutorial Solution
 */

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}