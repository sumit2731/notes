function dutchFlag(arr) {
  let numDic = { 0: 0, 1: 0, 2: 0 };
  for (let number of arr) numDic[number] += 1;
  let startingPoints = {
    0: 0,
    1: numDic[0],
    2: numDic[0] + numDic[1]
  }
  let currentIndex = 0;
  while (currentIndex < arr.length) {
    let currentNum = arr[currentIndex];
    if() {}
  }
}
