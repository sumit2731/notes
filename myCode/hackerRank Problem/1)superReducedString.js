function superReducedString(string) {
  let i = 1;
  while (i < string.length) {
    if (string[i] == string[i - 1]) {
      string = string.slice(0, i - 1) + string.slice(i + 1);
      i = i - 1;
    } else i++;
  }
  return string ? string : "Empty String";
}

console.log(superReducedString("baab"));
//aaabccddd → abccddd → abddd → abd