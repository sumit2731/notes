function reverseVowel(str) {
  let strArray = str.split(""),
    left = 0,
    right = str.length - 1;
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
  };
  while (left < right) {
    while (!vowelDic[strArray[left]] && left < right) left++;
    while (!vowelDic[strArray[right]] && left < right) right--;
    if (left < right) {
      [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
      left++;
      right--;
    }
  }
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("AEIOU"));
console.log(reverseVowels("DesignGUrus"));
