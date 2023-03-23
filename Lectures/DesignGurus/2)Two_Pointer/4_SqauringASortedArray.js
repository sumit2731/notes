function makeSquare(numbers) {
  let left = 0,
    right = numbers.length,
    currentIndex = numbers.length - 1,
    resultArray = new Array(numbers.length);
  while (left <= right) {
    if (Math.abs(numbers[left]) > Math.abs(numbers[right])) {
      resultArray[currentIndex] = numbers[left] * numbers[left];
      left++;
    } else {
      resultArray[currentIndex] = numbers[right] * numbers[right];
      right--;
    }
    currentIndex--;
  }
  return resultArray;
}
