function reverseVowel(str) {
  const vowels = {
    a: true,
    A: true,
    e: true,
    e: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };
  let strArray = str.split(""),
    left = 0,
    right = strArray.length - 1;
  while (left < right) {
    let leftChar = strArray[left];
    while (!vowels[leftChar] && left < right) {
      left++;
      leftChar = strArray[left];
    }
    let rightChar = strArray[right];
    while (!vowels[rightChar] && left < right) {
      right--;
      rightChar = strArray[right];
    }
    if (left < right) {
      [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
      left++;
      right--;
    }
  }
  return strArray.join("");
}

console.log(reverseVowel("hello"));
console.log(reverseVowel("DesignGUrus"));
console.log(reverseVowel("AEIOU"));
console.log(reverseVowel("aA"));
console.log(reverseVowel(""));
