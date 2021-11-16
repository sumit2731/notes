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
Course Solution Algo - 

    This problem follows the Sliding Window pattern and has a lot of similarities with Maximum Sum Subarray of Size K. We 
        will keep track of all the words in a HashMap and try to match them in the given string. Here are the set of steps 
        for our algorithm:

    Keep the frequency of every word in a HashMap.
    Starting from every index in the string, try to match all the words.
    In each iteration, keep track of all the words that we have already seen in another HashMap.
    If a word is not found or has a higher frequency than required, we can move on to the next character in the string.
    Store the index if we have found all the words.
*/
find_word_concatenation2 = function(str , words) {
    let wordLength = words[0].length, wordCount = words.length, allSubStrStartIndex = [];
    let wordsObj = {};
    for(let word of words) wordsObj[word] = (wordsObj[word] || 0) + 1;
    /*
    we will step into loop if we still have chnace to match all words if we start string from this index 
    */
    for(let i = 0; i<=(str.length) - (wordLength *wordCount) ; i++  ) {
      const wordsSeenObj = {};
      //here each iteration represets one word from words to be matched
      for(let j = 0; j <= words.length-1; j++) {
        //this is stratingIndex of each possible match form orignal string
        let currentWordStartIndex = (wordLength * j) + i;
        let currentWord = str.substr(currentWordStartIndex,wordLength);
        if(!(wordsObj[currentWord])) break;
        wordsSeenObj[currentWord] = (wordsSeenObj[currentWord]|| 0) + 1; 
        if(wordsSeenObj[currentWord] > wordsObj[currentWord]) break;
        else {
          if(j ===  wordCount-1) {
            allSubStrStartIndex.push(i);
          }
        }
      }
    }
    return allSubStrStartIndex;
  }
  
  
  console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
  console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));

  /* 
  The time complexity of the above algorithm will be O(N * M * Len)O(N∗M∗Len) where ‘N’ is the number of characters in the 
  given string, ‘M’ is the total number of words, and ‘Len’ is the length of a word
  
  */