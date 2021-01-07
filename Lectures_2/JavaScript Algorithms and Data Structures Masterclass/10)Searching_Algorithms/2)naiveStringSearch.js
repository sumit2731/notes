/**
 * Naive Implementation(My Solution)
 */

 function naiveStringMatch(mainString, matchingString) {
    let matchCount = 0;
    let i = 0;
    while(i < mainString.length) {
        if (mainString[i] == matchingString[0] && mainString.substr(i, matchingString.length) == matchingString) {
            matchCount ++;
            i+= matchingString.length-1;
        }
        i++;
    }
    return matchCount;
}

console.log(naiveStringMatch('uiomghjomg','omg'));


/**
 * Naive implementation(Course Solution)
 */

function naiveStringMatch2(mainString, matchingString) {
  let matchCount = 0;
  for (let i = 0; i < mainString.length; i++) {
    for (let j = 0; j < matchingString.length; j++) {
      if (mainString[i + j] != matchingString[j]) break;
      else if (j == matchingString.length - 1) matchCount++;
    }
  }
  return matchCount;
}

console.log(naiveStringMatch2("uiomghjomgu", "omg"));