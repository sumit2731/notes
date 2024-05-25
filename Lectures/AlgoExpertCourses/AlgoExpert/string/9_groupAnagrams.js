/**
 * 
  Write a function that takes in an array of strings and groups anagrams together.

  input -  = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
   output - [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
 */

/**
 * Solution1 - unOptimized
 *
 * w - numbers of words
 * n - length of longest word
 *
 * Space Complxity - O(wn), This is because we created a array of sorted words, and then for retruning also we need same space
 * Time Complexity - O (w * n(logn)) + O(n w(log w))
 */

function groupAnagrams(words) {
  if (words.length == 0) return [];

  //O (w * n(logn))
  const sortedWords = words.map((word) => word.split("").sort().join(""));
  //w
  const indices = [...Array(words.length).keys()];
  //O (n)(w logw) - This is because in each comparison we are comparing words of length n to each other
  indices.sort((a, b) => {
    if (sortedWords[a] < sortedWords[b]) return -1;
    if (sortedWords[a] > sortedWords[b]) return 1;
    else return 0;
  });

  const result = [];
  let currentAnalgramGroup = [];
  let currentAnalgram = sortedWords[indices[0]];
  for (const index of indices) {
    let word = words[index];
    let sortedWord = sortedWords[index];
    if (sortedWord == currentAnalgram) {
      currentAnalgramGroup.push(word);
      continue;
    }
    result.push(currentAnalgramGroup);
    currentAnalgram = sortedWord;
    currentAnalgramGroup = [word];
  }
  result.push(currentAnalgramGroup);
  return result;
}

/**
 * Solution 2 - Optimized, still not best
 * w - number of words and n is length of longest word
 * space - O(wn) , we create a hashmap that store all groups of anagramsanalgrams
 * time - O(w * nlogn)
 */

function groupAnagrams2(words) {
  let wordDic = {};
  for (let word of words) {
    //
    let sortedWord = word
      .split("")
      .sort(
        (charA, charB) =>
          charA.toLowerCase().charCodeAt() - charB.toLowerCase().charCodeAt()
      )
      .join("");
    if (!wordDic[sortedWord]) wordDic[sortedWord] = [];
    wordDic[sortedWord].push(word);
  }
  return Object.values(wordDic);
}

/**
 * My Solution- best one (if it can be given that only small case strings are given)
 * m - length of words
 * n - lenth of string
 * Time complexity - O(m*n)
 * Space Complexity - O(m*n)
 *
 * Explanation - https://www.youtube.com/watch?v=--k5-3EOObs
 */
function groupAnagrams(words) {
  let wordDic = {};
  for (let word of words) {
    let sortedWord = returnSortedStr(word);
    if (!wordDic[sortedWord]) wordDic[sortedWord] = [];
    wordDic[sortedWord].push(word);
  }
  return Object.values(wordDic);
}

function returnSortedStr(str) {
  const charArr = Array(26).fill(0);
  let sortedStr = "";
  for (let char of str) {
    let arrayIndex = char.charCodeAt(0) - "a".charCodeAt(0);
    charArr[arrayIndex] += char;
  }
  //join with deliimeter to ensure uniqueness
  return charArr.join("#");
}
