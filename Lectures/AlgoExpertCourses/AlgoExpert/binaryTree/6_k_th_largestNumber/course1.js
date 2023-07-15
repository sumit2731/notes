// This is an input class. Do not edit.

/**
 * Given a binary tree return kth largest number in it
 */


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Time Complexity - O(n) time | O(n) space
 * Space Complexity - O(n)
 *  n - no of nodes in Tree
 */
function findKthLargestValueInBst(tree, k) {
    let sortedArray = [];
    
    inOrderTraversal(tree, sortedArray);
    return sortedArray[sortedArray.length- k];
}

function inOrderTraversal(node,sortedArray) {
    if (!node) return;
    if (node.left) inOrderTraversal(node.left);
    sortedArray.push(node.value);
    if (node.right) inOrderTraversal(node.right);
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
