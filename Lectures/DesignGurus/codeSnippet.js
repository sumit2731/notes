/**
 * To check a character in string is alphabet only
 */
for (const currChar of sentence.toLowerCase()) {
  if (currChar.match(/[a-z]/i)) {
    // If it an alphabet
    // Add the character to set
    seen.add(currChar);
  }
}
