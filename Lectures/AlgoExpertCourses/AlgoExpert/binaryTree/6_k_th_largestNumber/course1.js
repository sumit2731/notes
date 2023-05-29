// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * O(n) time | O(n) space
 */
function findKthLargestValueInBst(tree, k) {
    let sortedArray = [];
    function inOrderTraversal(node) {
        if (!node) return;
        if (node.left) inOrderTraversal(node.left);
        sortedArray.push(node.value);
        if (node.right) inOrderTraversal(node.right);
    }
    inOrderTraversal(tree);
    return sortedArray[sortedArray.length - 1 - k + 1];
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
