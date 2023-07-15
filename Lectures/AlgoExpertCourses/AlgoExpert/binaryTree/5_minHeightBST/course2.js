function minHeightBst(array) {
    return constructMinHeightBst(array,null,0,array.length-1);
}

/**
 * Solution 1
 * Time - O(n), space- O(n)
 * 
 * This is diffrent from solution1 as here we do not have to iterate through tree to insert value at correct position
 * 
 * Note - Trick here is how we get back the value of bst
 */
function minHeightBst(arr) {
  return minHeightBstHelper(arr,0,arr.length-1,null);
}

function minHeightBstHelper(arr,startIndex,endIndex,bst) {
  if(startIndex > endIndex) return;
  let middleIndex = Math.floor((endIndex+startIndex)/2);
  const newBstNode = new BST(arr[middleIndex]);
  if(!bst) bst = newBstNode;
  else {
      let childProperty = 'left'
      if(bst.value <= arr[middleIndex]) childProperty = 'right';
      bst[childProperty] = newBstNode;
      bst = bst[childProperty]
  }
  minHeightBstHelper(arr,startIndex,middleIndex-1,bst);
  minHeightBstHelper(arr,middleIndex+1,endIndex,bst);
  return bst;
}
minHeightBstHelper(0,arr.length-1,bstTree);
return bstTree;




class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }


minHeightBst([0,1,2,3,4,5,6,7,8]);