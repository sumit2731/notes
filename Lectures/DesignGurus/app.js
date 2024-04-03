function checkIfPangram(sentence) {
  // Create a set to store unique characters
  let seen = new Set();

  // Convert sentence to lowercase and iterate over each character
  for (const currChar of sentence.toLowerCase()) {
    if (currChar.match(/[a-z]/i)) {
      // If it an alphabet
      // Add the character to set
      seen.add(currChar);
    }
  }

  // Return true if set size is 26 (total number of alphabets)
  return seen.size === 26;
}
