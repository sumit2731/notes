function minHeightBst(array) {
    return constructMinHeightBst(array,null,0,array.length-1);
}

/**
 * Solution 1
 * Time - O(n), space- O(n)
 */
function constructMinHeightBst(array,bst,startIndex, endIndex) {
    if(startIndex > endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    if(bst == null) bst = new BST(array[middleIndex]);
    else {
        if(array[middleIndex] < bst.value) {
            bst.left = new BST(array[middleIndex]);
            bst = bst.left
        }
        else {
            bst.right = new BST(array[middleIndex])
            bst = bst.right;
        }
    }
    constructMinHeightBst(array,bst,startIndex,middleIndex-1);
    constructMinHeightBst(array,bst,middleIndex+1,endIndex);
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