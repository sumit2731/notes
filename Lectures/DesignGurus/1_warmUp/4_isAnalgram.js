/**
 * @MY Solution - here we iterate over each string once
 */

function analgram(str1, str2) {
  if (str1.length !== str2.length) return false;
  else {
    let charDic = {};
    for (let char of str1) charDic[char] = (charDic[char] || 0) + 1;
    for (let char of str2) {
      if (!charDic[char]) return false;
      else charDic[char]--;
    }
    return true;
  }
}

/**
 * @Course Solution. here we iterate over string once, but then have to iterate over object properties
 */

function analgram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let strDic = {};
  for (let i = 0; i < str1.length; i++) {
    strDic[str1[i]] = (strDic[str1[i]] || 0) + 1;
    strDic[str2[i]] = (strDic[str2[i]] || 0) - 1;
  }
  for (let char in strDic) {
    if (strDic[char] !== 0) return false;
  }
  return true;
}
