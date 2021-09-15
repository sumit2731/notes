/**
 *Write a recursive function called "reverse" which accepts a string and returns a new string in reverse.
 */

/**
 * MySolution
 */
 function reverse(string) {
     if (string.length <= 1) return string;
     return string.slice(-1) + reverse(string.slice(0,-1));
 }

 console.log(reverse("sumeet"));

/**
 * Tutorial Solution
 */

 function reverse2(string) {
     if (str.length <= 1) return str;
     return reverse2(string.slice(1)) + str[0];
 }



 function reverse(str) {
     if(str.length === 1) return str;
     return str.slice(-1) + reverse(str.slice(0,-1));
 }