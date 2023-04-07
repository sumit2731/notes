function reverseVowels(str) {
  let vowelDic = {
      a: true,
      A: true,
      e: true,
      E: true,
      i: true,
      I: true,
      o: true,
      O: true,
      u: true,
      U: true,
    },
    newStr = "",
    endPointer = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (vowelDic[currentChar]) {
      while (!vowelDic[str[endPointer]]) {
        endPointer--;
      }
      newStr += str[endPointer];
      endPointer--;
    } else newStr += str[i];
  }
  return newStr;
}

/**
 * @desc Also see course solution
 */
