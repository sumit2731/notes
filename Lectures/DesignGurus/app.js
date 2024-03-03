function findSqrt(num) {
  let left = 2,
    right = Math.floor(num / 2),
    pivot;
  while (left < right) {
    pivot = Math.floor((left + right) / 2);
    let sqr = pivot * pivot;
    if (sqr == num) return pivot;
    else if (sqr > num) right = pivot - 1;
    else left = pivot + 1;
  }
  return right;
}

console.log(findSqrt(90));
console.log(findSqrt(4));
console.log(findSqrt(2));
