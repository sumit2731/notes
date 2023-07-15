function groupAnagrams(words) {
  let wordDic = {};
  for(let word of words) {
    let sortedWord = word.split('').sort((charA,charB) => charA.toLowerCase().charCodeAt() - charB.toLowerCase().charCodeAt()).join('');
    if(!wordDic[sortedWord]) wordDic[sortedWord] = [];
    wordDic[sortedWord].push(word)

  }
  return Object.values(wordDic)
}


console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]));