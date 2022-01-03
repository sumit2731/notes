const remove_duplicates = function(arr) {
  // TODO: Write your code here
  let lastUniqueIndex = 0;
  for(let i =1;i<=arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
      lastUniqueIndex++;
      arr[lastUniqueIndex] = arr[i];
    }
  }
  return lastUniqueIndex++;
};

console.log(remove_duplicates([2,3,3,3,6,9,9]));