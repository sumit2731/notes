/**
 * 
  Write a function that takes in a non-empty sorted array of distinct integers,
  constructs a BST from the integers, and returns the root of the BST.
  The function should minimize the height of the BST.
  
  You've been provided with a BST class that you'll have to use to construct the BST.
 */




/**
 * Time - O(n Logn)
 * Space -O(n)
 */
function minHeightBst(array) {
    let root = null;
    function constructMinHeightBst(array, startIndex, endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if (!root) root = new BST(array[middleIndex]);
        else root.insert(array[middleIndex]);
        if (startIndex !== endIndex) {
            if (startIndex <= (middleIndex - 1)) constructMinHeightBst(array, startIndex, middleIndex - 1);
            if ((middleIndex + 1) <= endIndex) constructMinHeightBst(array, middleIndex + 1, endIndex);
        }
    }
    constructMinHeightBst(array, 0, array.length - 1, root);
    return root;
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

/**
 * @BetterSolution
 */
function minHeightBst(array) {
    let root = null;
    function constructMinHeightBst(array, startIndex, endIndex, lastInsertedNode) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        let currentInsertedNode;
        if (lastInsertedNode) {
            currentInsertedNode = new BST(array[middleIndex]);
            root = currentInsertedNode;
        }
        else currentInsertedNode = lastInsertedNode.insert(array[middleIndex]);
        if (startIndex !== endIndex) {
            if (startIndex <= (middleIndex - 1)) constructMinHeightBst(array,startIndex,middleIndex-1,currentInsertedNode);
            if ((middleIndex + 1) <= endIndex) constructMinHeightBst(array, middleIndex + 1, endIndex, currentInsertedNode);
        }
    }
    constructMinHeightBst(array, 0, array.length-1);
    return root;
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
                return this.left;
            } else {
                return this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
                return this.right;
            } else {
                return this.right.insert(value);
            }
        }
    }
}





// Do not edit the line below.
exports.minHeightBst = minHeightBst;