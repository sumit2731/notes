function sameBsts(arrayOne, arrayTwo) {
    if((arrayOne.length == 0) && (arrayTwo.length == 0)) return true;
    if((arrayOne.length != arrayTwo.length) || (arrayOne[0] != arrayTwo[0])) return false;
    let leftSubArray1 = [], rightSubArray1 = [], leftSubArray2= [], rightSubArray2 = [];
    for(let i = 1; i< arrayTwo.length; i++) {
      if(arrayOne[i] < arrayOne[0]) leftSubArray1.push(arrayOne[i]);
      else rightSubArray1.push(arrayOne[i]);
      if(arrayTwo[i] < arrayTwo[0]) leftSubArray2.push(arrayTwo[i]);
      else rightSubArray2.push(arrayTwo[i]);
    }
    return (leftSubArray1.length == leftSubArray2.length) && (rightSubArray1.length == rightSubArray2.length) && sameBsts(leftSubArray1, leftSubArray2) && sameBsts(rightSubArray1, rightSubArray2)
  }
  
  // Do not edit the line below.
  exports.sameBsts = sameBsts;
  