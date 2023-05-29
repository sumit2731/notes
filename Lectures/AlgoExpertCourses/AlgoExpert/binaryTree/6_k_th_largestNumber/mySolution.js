/* 
In Order traversal of binary tree generates an array, which is in ascensing order.
we want descending array in deadcending order so we iterate the tree in reverse inorder
*/

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let result = [];
    function reverseInOrderTraversal(node) {
      // if(!node.value) return;
      if(node.right)reverseInOrderTraversal(node.right);
      result.push(node.value);
      if(result.length == k) return result[k-1]
      if(node.left) reverseInOrderTraversal(node.left)
    }
    reverseInOrderTraversal(tree);
    return result[k-1];
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  