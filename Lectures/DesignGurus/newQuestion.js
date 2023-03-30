function backspace_compare(str1, str2) {
  let ptr1 = 0,
    ptr2 = 0,
    str1Ended = false,
    str2Ended = false;
  while (ptr1 < str1.length || ptr2 < str2.length) {
    while (str1[ptr1] === "#" && ptr1 < str1.length) ptr1++;
    while (str2[ptr2] === "#" && ptr2 < str2.length) ptr2++;
    if (ptr1 === str1.length) str1Ended = true;
    if (ptr2 === str2.length) str2Ended = true;
    if (str1Ended && !str2Ended) return false;
    if (str2Ended && !str1Ended) return false;
    if (str2Ended && str1Ended) return true;
    if (str1[ptr1] !== str2[ptr2]) return false;
    else {
      ptr1++;
      ptr2++;
    }
  }
  return true;
}

/**
 * abc#####
 * abc
 *
 * abc#####d
 * abc
 *
 * abcd
 * a##bcd###
 *
 */

console.log(backspace_compare("xy#z", "xzz#")); //false
console.log(backspace_compare("xy#z", "xyz#")); //true
console.log(backspace_compare("xp#", "xyz##")); //false
console.log(backspace_compare("xywrrmp", "xywrrmu#p")); //false
