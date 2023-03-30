/**
 * @MySolution - same as course solution. but course solution is moe elegent
 */

function backspace_compare(str1, str2) {
  let ptr1 = str1.length - 1,
    ptr2 = str2.length - 1;
  while (ptr1 >= 0 || ptr2 >= 0) {
    ptr1 = getNextChar(str1, ptr1);
    ptr2 = getNextChar(str2, ptr2);
    //we have recahed at end of bith strings, so return true
    if (ptr1 < 0 && ptr2 < 0) return true;
    // we have reached end at one of string but other is still pending
    if (ptr1 < 0 || ptr2 < 0) return false;
    if (str1[ptr1] !== str2[ptr2]) return false;
    ptr1--;
    ptr2--;
  }
  return true;
}

function getNextChar(str, index) {
  if (str[index] !== "#" || index === -1) return index;
  else {
    let backSpaceCount = 1;
    index--;
    while (backSpaceCount > 0) {
      if (str[index] === "#") backSpaceCount++;
      else backSpaceCount--;
      if (index > 0) {
        index--;
      } else return -1;
    }
  }
  return index;
}

/**
 * @CourseSolution
 */
function backspace_compare(str1, str2) {
  // use two pointer approach to compare the strings
  let index1 = str1.length - 1,
    index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1),
      i2 = get_next_valid_char_index(str2, index2);
    if (i1 < 0 && i2 < 0) {
      // reached the end of both the strings
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      // reached the end of one of the strings
      return false;
    }
    if (str1[i1] !== str2[i2]) {
      // check if the characters are equal
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}

function get_next_valid_char_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      // found a backspace character
      backspaceCount += 1;
    } else if (backspaceCount > 0) {
      // a non-backspace character
      backspaceCount -= 1;
    } else {
      break;
    }

    index -= 1; // skip a backspace or a valid character
  }

  return index;
}

// console.log(backspace_compare("xy#z", "xzz#"));
// console.log(backspace_compare("xy#z", "xyz#"));
// console.log(backspace_compare("xp#", "xyz##"));
// console.log(backspace_compare("xywrrmp", "xywrrmu#p"));
console.log(backspace_compare("xywrrmp", "xywrrmu#p"));
