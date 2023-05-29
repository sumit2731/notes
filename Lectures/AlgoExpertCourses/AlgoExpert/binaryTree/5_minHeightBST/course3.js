function minHeightBst(array) {
    return constructMinHeightBst(array,null,0,array.length-1);
}

/**
 * Solution 1
 * Time - O(n), space- O(n)
 */
function constructMinHeightBst(array,startIndex, endIndex) {
    if(startIndex > endIndex) return null;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    const bst = new BST(array[middleIndex]);
    bst.left = constructMinHeightBst(array, startIndex,middleIndex-1);
    bst.right = constructMinHeightBst(array, middleIndex+1, endIndex);
    return bst;
}




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