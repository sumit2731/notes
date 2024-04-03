/**
 * @CourseSolution
 */

function checkIfPangram(str) {
  const charSet = new Set();
  for (let char of str.toLowerCase()) {
    if (char.match(/[a-z]/i)) charSet.add(char);
  }
  return charSet.size == 26;
}

console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Test case 2: "This is not a pangram"
// Expected output: false
console.log(checkIfPangram("This is not a pangram"));

// Test case 3: "abcdef ghijkl mnopqr stuvwxyz"
// Expected output: true
console.log(checkIfPangram("abcdef ghijkl mnopqr stuvwxyz"));

// Test case 4: ""
// Expected output: false
console.log(checkIfPangram(""));

// Test case 5: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Expected output: true
console.log(
  checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
);
