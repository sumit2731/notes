/**
 * Ask these questions - do string contains special chacarters or spaces?
 *
 * remeber - regular expression for matching chacaters
 */
function validPallindrome(str) {
  let startPointer = 0,
    endPointer = str.length - 1;
  while (startPointer < endPointer) {
    while (
      !str[startPointer].match(/^[a-z0-9]+$/i) &&
      startPointer < endPointer
    )
      startPointer++;
    while (!str[endPointer].match(/^[a-z0-9]+$/i) && startPointer < endPointer)
      endPointer--;
    if (str[startPointer].toLowerCase() !== str[endPointer].toLowerCase()) {
      return false;
    }
    startPointer++;
    endPointer--;
  }
  return true;
}
