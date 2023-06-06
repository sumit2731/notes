function backspace_compare(str1, str2) {
  let index1 = str1.length-1, index2= str2.length-1, char1, char2;
 while((index1 >= 0) && (index2 >=0)) {
  index1 = getNextChar(str1,index1);
  index2 = getNextChar(str2,index2);
  if((index1 == -1) && (index2 == -1)) return true;
  if((index1 == -1) || (index2 == -1)) return false;
  if(str1[index1] != str2[index2]) return false;
  index1--;
  index2--;
 }
 if((index1 == -1) && (index2 == -1)) return true;
 if((index1 == -1) || (index2 == -1)) return false;
  
}


function getNextChar(str,index) {
  if(str[index] != '#') return index;
  let backSpaceCount = 1;
  index--;
  while((backSpaceCount != 0) && (index > -1)) {
    if(str[index] != '#') backSpaceCount--;
    else backSpaceCount++;
    index--;
  }
  return index;
}

console.log(backspace_compare('xy#z', 'xzz#'));
console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xp#', 'xyz##'));
console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));