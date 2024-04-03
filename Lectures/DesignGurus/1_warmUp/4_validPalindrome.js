function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    let leftChar = str[left];
    while (!leftChar.match(/^[a-z0-9]+$/i) && left < right) {
      left++;
      leftChar = str[left];
    }
    let rightChar = str[right];
    while (!rightChar.match(/^[a-z]+$/i) && left < right) {
      right--;
      rightChar = str[right];
    }
    if (leftChar.toLowerCase() !== right.toLowerCase()) return false;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// Test case 2: "race a car"
// Expected output: false
console.log(isPalindrome("race a car"));

// Test case 3: "Was it a car or a cat I saw?"
// Expected output: true
console.log(isPalindrome("Was it a car or a cat I saw?"));

// Test case 4: "Madam, in Eden, I'm Adam."
// Expected output: true
console.log(isPalindrome("Madam, in Eden, I'm Adam."));

// Test case 5: "empty string"
// Expected output: true
console.log(isPalindrome(""));
