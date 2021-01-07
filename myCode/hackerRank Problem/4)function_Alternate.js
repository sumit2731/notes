/* In this challenge, you will be given a string. You must remove characters until the string is made up of any two 
alternating characters. When you choose a character to remove, all instances of that character must be removed. Your 
goal is to create the longest string possible that contains just two alternating letters.

As an example, consider the string abaacdabd. If you delete the character a, you will be left with the string bcdbd. 
Now, removing the character c leaves you with a valid string bdbd having a length of 4. Removing either b or d at any 
point would not result in a valid string.
Given a string , convert it to the longest possible string  made up only of alternating characters. Print the length of 
string  on a new line. If no string  can be formed, print  instead.
 */

 function alternate(string) {

  function isValidString(string) {
    if (string[0] == string[1]) return false;
    for (let i = 2; i < string.length; i++) {
      if (i % 2 == 0 && string[i] != string[0]) return false;
      if (i % 2 != 0 && string[i] != string[1]) return false;
    }
    return true;
  }

  let stringObj = {};
  for (let char of string) stringObj[char] = (stringObj[char] || 0) + 1;
  let chars = Object.keys(stringObj);
  let maxLength = 0;
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      let newString = string
        .split("")
        .filter((char) => [chars[i], chars[j]].indexOf(char) != -1)
        .join("");
      if (isValidString(newString))
        maxLength = Math.max(maxLength, newString.length);
    }
  }
  console.log(maxLength);
  return maxLength;
}

alternate("beabeefeab");