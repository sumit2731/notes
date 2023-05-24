/* 

  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  
  Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and
  only if it satisfies the BSTproperty: its value is strictly greater than the values of every node to its left; its value is
  less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves 
  or None / null.


*/


/**
 * Time Complexity - 
 *  Best Case -O(logn)
 *  Worst Case - O(n) 
 * Space Complexity - O(1)
 */
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let node = tree,  closestValue = Infinity;
  while(node) {
    //let currentDifference = ;
    if(Math.abs(closestValue - target) > Math.abs(target-node.value)) closestValue = node.value
    if(node.value == target) break;
    else if(node.value >target) node = node.left
    else node = node.right
    
  }
  return closestValue;
}

/**
 * Time Complexity - 
 *  Average -O(logn)
 *  worst - O(n)
 * 
 * Space Complexity -
 *  Average - O(D) or O(logn), depth of longest branch
 *  Worst - O(n)
 * 
 * here iterative solution is better
 */

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
