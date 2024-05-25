function groupAnagrams(words) {
  const resultDic = {};
  for (let word of words) {
    let dicCode = getCrypticValue(word);
    if (!resultDic[dicCode]) resultDic[dicCode] = [];
    resultDic[dicCode].push(word);
  }
  return Object.values(resultDic);
}

function getCrypticValue(word) {
  let charCodeSum = 0;
  for (let i = 0; i < word.length; i++) {
    charCodeSum += word.charCodeAt(i);
  }
  return charCodeSum;
}

console.log(groupAnalGrams(["yo", "abc", "oy", "cba"]));
