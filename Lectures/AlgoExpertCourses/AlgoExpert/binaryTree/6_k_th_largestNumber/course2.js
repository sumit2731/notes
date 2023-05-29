// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(numberOfNodesVisisted, latestVisitedNodeValue) {
      this.numberOfNodesVisisted = numberOfNodesVisisted;
      this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

/**
 * Time - O(h+k) time - for explanation see cvideo
 * Space - O(h) space, for recursion stack
 */
function findKthLargestValueInBst(tree, k) {
  let treeInfo = new TreeInfo(0, null);
  function reverseInOrderTraversal(node) {
      if(!node.value) return;
      if((treeInfo.numberOfNodesVisisted < k) && node.right) reverseInOrderTraversal(node.right,k);
      if(treeInfo.numberOfNodesVisisted < k) {
          treeInfo.numberOfNodesVisisted++;
          treeInfo.latestVisitedNodeValue = node.value;
      }
      if((treeInfo.numberOfNodesVisisted < k) && (node.left)) reverseInOrderTraversal(node.left,k);
      
  }
  reverseInOrderTraversal(tree);
  return treeInfo.latestVisitedNodeValue;
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
