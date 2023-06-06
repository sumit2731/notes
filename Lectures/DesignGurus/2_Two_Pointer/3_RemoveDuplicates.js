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

function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}
