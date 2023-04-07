/**
 * @My Solution - similar to course
 */

function removeDuplicates(arr) {
  let endingPtr = 0,
    currentPtr = 1;
  while (currentPtr < arr.length) {
    if (arr[currentPtr] !== arr[currentPtr - 1]) {
      endingPtr++;
      arr[endingPtr] = arr[currentPtr];
    }
    currentPtr++;
  }
  return endingPointer + 1;
}

/**
 * @Course Solution
 */

function removeElement(numbers, key) {
  let endPtr = -1,
    currentPtr = 0;
  while (currentPtr < numbers.length) {
    if (numbers[currentPtr] !== key) {
      endPtr++;
      numbers[endPtr] = numbers[currentPtr];
    }
  }
  return endPtr + 1;
}
