function dutch_flag_sort(arr) {
  let left = 0,
    current = 0,
    right = arr.length - 1;
  while (current <= right) {
    if (arr[current] === 1) current++;
    else if (arr[current] === 0) {
      [arr[left], arr[current]] = [arr[current], arr[left]];
      left++;
      current++;
    } else {
      [arr[right], arr[current]] = [arr[current], arr[right]];
      right--;
    }
  }
}

let arr1 = [1, 0, 2, 1, 0];
let arr2 = [2, 2, 0, 1, 2, 0];

dutch_flag_sort(arr1);
dutch_flag_sort(arr2);

console.log(arr1);
console.log(arr2);
