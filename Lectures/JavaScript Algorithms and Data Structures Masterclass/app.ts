function non_repeat_substring(string) {
  let start = 0,end = 0; stringObj = {},maxlength = 0;
  while (end < string.length) {
    let char = string[end];
     if (stringObj[char]) {
         maxlength = Math.max(maxlength, end - start);
         start = end =  stringObj[char];
         //end = stringObj[string[end]];
         stringObj = {};
     }
     else {
         stringObj[char] = end+1;
         end++;
     }
  }
  maxlength = Math.max(maxlength, end - start);
  return maxlength;
}