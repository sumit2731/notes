/**
 * @MySolution - It has slightly more complexity, course solution is better
 */

function shortestDistance(words, word1, word2) {
  let word1Array = [],
    word2Array = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) word1Array.push(i);
    else if (words[i] === word2) word2Array.push(i);
  }
  let shortestDistance = Infinity;
  for (let index1 of word1Array) {
    for (let index2 of word2Array) {
      shortestDistance = Math.min(shortestDistance, Math.abs(index2 - index1));
    }
  }
  return shortestDistance;
}

/**
 * @CourseSolution
 */
