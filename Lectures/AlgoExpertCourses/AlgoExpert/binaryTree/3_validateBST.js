/**
 * 
  Write a function that takes in a potentially invalid Binary Search Tree (BST)
  and returns a boolean representing whether the BST is valid.
 */

function validateBst(tree) {
    function validateBstHelper(node, leftParent, rightParent) {
        if (!node) return true;
        if (leftParent && leftParent.value <= node.value) return false;
        if (rightParent && rightParent.value > node.value) return false;
        return validateBstHelper(node.left, node, rightParent) && validateBstHelper(node.right, leftParent, node)
    }
    return validateBstHelper(tree, null, null);
}

/**
 * same solution different Naming
 */

function validateBst(tree) {
    function validateBstHelper(node, minValue, maxValue) {
        if (!node) return true;
        if ((minValue > node.value) || (maxValue <= node.value)) return false;
        return validateBstHelper(node.left, minValue, node.value) && validateBstHelper(node.right, node.value, maxValue)
    }
    return validateBstHelper(tree, -Infinity, Infinity);
}