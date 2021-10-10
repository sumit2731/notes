/* 
*Hard Problem

Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation 
    of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

    Example 1 -

        Input: String="catfoxcat", Words=["cat", "fox"]
        Output: [0, 3]
        Explanation: The two substring containing both the words are "catfox" & "foxcat".

    Example 2 -

        Input: String="catcatfoxfox", Words=["cat", "fox"]
        Output: [3]
        Explanation: The only substring containing both the words is "catfox".

*/

/* 
MY Approach- Course Solution is awesome
*/
const find_word_concatenation = function(str, words) {
    let wordsToBeMatched = [...words], wordLength = words[0].length ,
    currentIndex = 0, matchStartIndex = 0, allMatchesStartIndex = [];
    while(currentIndex < str.length) {
      let substr = str.substr(currentIndex,wordLength);
      let hasMatch = false;
      let i = 0;
      for(i = 0; i< wordsToBeMatched.length; i++) {
        if(wordsToBeMatched[i] === substr) {
          hasMatch = true;
          break;
        }
      }
      if(hasMatch) {
        wordsToBeMatched.splice(i,1);
        if(wordsToBeMatched.length) {
          currentIndex += wordLength;
        }
        while(wordsToBeMatched.length === 0) {
          allMatchesStartIndex.push(matchStartIndex);
          let startingWord = str.substr(matchStartIndex,wordLength);
          let nextWord = str.substr(currentIndex+wordLength,wordLength);
          if(startingWord === nextWord) {
            matchStartIndex += wordLength;
            currentIndex += wordLength;
          } else {
            wordsToBeMatched = [...words];
            currentIndex = matchStartIndex +1;
            matchStartIndex = currentIndex;
          }
        }
      }
      else {
        wordsToBeMatched = [...words];
        currentIndex = matchStartIndex +1;
        matchStartIndex = currentIndex
      }
      
    }
    return allMatchesStartIndex;
};
  
//find_word_concatenation(, cat,fox)
let str="catcatfoxfox", words=["cat", "fox"];

console.log(find_word_concatenation(str,words));

/* 
Course Solution - Awesome one
*/
function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
      return [];
    }
  
    wordFrequency = {};
  
    words.forEach((word) => {
      if (!(word in wordFrequency)) {
        wordFrequency[word] = 0;
      }
      wordFrequency[word] += 1;
    });
  
    const resultIndices = [],
      wordsCount = words.length;
    wordLength = words[0].length;
  
    for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
      const wordsSeen = {};
      for (j = 0; j < wordsCount; j++) {
        next_word_index = i + j * wordLength; // 0
        // Get the next word from the string
        word = str.substring(next_word_index, next_word_index + wordLength);
        if (!(word in wordFrequency)) { // Break if we don't need this word
          break;
        }
  
        // Add the word to the 'wordsSeen' map
        if (!(word in wordsSeen)) {
          wordsSeen[word] = 0;
        }
        wordsSeen[word] += 1;
  
  
        // no need to process further if the word has higher frequency than required
        if (wordsSeen[word] > (wordFrequency[word] || 0)) {
          break;
        }
  
        if (j + 1 === wordsCount) { // Store index if we have found all the words
          resultIndices.push(i);
        }
      }
    }
  
    return resultIndices;
  }
  
  
  console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
  console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));