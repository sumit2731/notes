/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should 
 * be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.8284, and since we need to return the floor of the square root (integer), hence we returned 2.  
Example 2:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2.
Example 3:

Input: x = 2
Output: 1
Explanation: The square root of 2 is 1.414, and since we need to return the floor of the square root (integer), hence we returned 1.  
 */

/**
 * My Solution
 */

function squareRoot(num) {
  for (let i = 1; i <= num / 2; i++) {
    let sqr = i * i;
    if (sqr === num) return i;
    else if (sqr > num) return i - 1;
  }
}

/**
 * Course Solution
 */
function squareRoot2(num) {
  if (num < 2) return num;
  let start = 2,
    end = Math.floor(num / 2);
  pivot = Math.floor((start + end) / 2);
  while (end >= start) {
    pivot = Math.floor((start + end) / 2);
    let sqr = pivot * pivot;
    if (sqr === num) return pivot;
    else if (num > sqr) start = pivot + 1;
    else end = pivot - 1;
  }
  return end;
}

console.log(squareRoot(4));
