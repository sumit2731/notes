find_word_concatenation = function(str , words) {
  let wordLength = words[0].length, wordCount = words.length, allSubStrStartIndex = [];
  let wordsObj = {};
  for(let word of words) wordsObj[word] = (wordsObj[word] || 0) + 1;
  for(let i = 0; i<=(str.length) - (wordLength *wordCount) ; i++  ) {
    const wordsSeenObj = {};
    for(let j = i; j <= (wordLength * wordCount)-1+i; j+= wordLength) {
      let currentWord = str.substr(j,wordLength);
      if(!(wordsObj[currentWord])) break;
      wordsSeenObj[currentWord] = (wordsSeenObj[currentWord]|| 0) + 1; 
      if(wordsSeenObj[currentWord] > wordsObj[currentWord]) break;
      else {
        if(j === (wordLength * (wordCount-1))+i) {
          allSubStrStartIndex.push(i);
        }
      }
    }
  }
  return allSubStrStartIndex;
}

console.log(find_word_concatenation('catfoxcat', ['cat','fox']));