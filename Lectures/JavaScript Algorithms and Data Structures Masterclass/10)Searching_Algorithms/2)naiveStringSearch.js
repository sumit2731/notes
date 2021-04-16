/* 
*Searching for substirng in larger strings
*/

/**
 * Naive implementation(Course Solution)
 */

function naiveStringMatch(mainString, matchingString) {
  let matchCount = 0;
  for (let i = 0; i <= mainString.length - matchingString.length; i++) {
    for (let j = 0; j < matchingString.length; j++) {
      if (mainString[i + j] != matchingString[j]) break;
      else if (j == matchingString.length - 1) matchCount++;
    }
  }
  return matchCount;
}

//console.log(naiveStringMatch2("uiomghjomgu", "omg"));

/* 
Best Case - When first occurance of pattern is not present in string at all
  O(n)
Worst case - when last char of peetrn is diffrent
  O(m(n-m+1))
Average Case - O(m(n-m+1))
*/


/* 
My Solution- Better uses single loop
*/
function naiveStringMatch2(mainString, subString) {
  let subStringIndex = 0, matchCount = 0;
  for(let longerStringIndex = 0; longerStringIndex < mainString.length; longerStringIndex++) {
      
    if(mainString[longerStringIndex] === subString[subStringIndex]) {
      
      if(subStringIndex === subString.length-1) {
        matchCount +=1;
        subStringIndex = 0;
      } 
      else subStringIndex +=1;  
    }
    else subStringIndex = 0; 
  }
  return matchCount;
}

console.log(naiveStringMatch2("uiomomohghjomgu", "omoh"));

/* 
Best Case - O(m)
Worst Case - O(m)
Average Case - O(m)
*/