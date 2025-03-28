/* 
  Given a non-empty array of integers representing the pre-order traversal of a
  Binary Search Tree (BST), write a function that creates the relevant BST and
  returns its root node.


  Hint1 -
  
    Think about the properties of a BST. Looking at the pre-order-traversal nodes
    (values), how can you determine the right child of a particular node?


  Hint 2-
  
    The right child of any BST node is simply the first node in the pre-order
    traversal whose value is larger than or equal to the particular node's value.
    From this, we know that the nodes in the pre-order traversal that come before
    the right child of a node must be in the left subtree of that node.

  Hint 3 -
  
    Once you determine the right child of any given node, you're able to generate
    the entire left and right subtrees of that node. You can do so by recursively
    creating the left and right child nodes of each subsequent node using the fact
    stated in Hint #2. A node that has no left and right children is naturally a
    leaf node.

  Hint 4-

  
    To solve this problem with an optimal time complexity, you need to realize
    that it's unnecessary to locate the right child of every node. You can simply
    keep track of the pre-order-traversal position of the current node that needs
    to be created and try to insert that node as the left or right child of the
    relevant previously visited node. Since this tree is a BST, every node must
    satisfy the BST property; by somehow keeping track of lower and upper bounds
    for node values, you should be able to determine if a node can be inserted as
    the left or right child of another node. With this approach, you can solve
    this problem in linear time. See this question's video explanation for a more
    detailed explanation of this approach.


*/


// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * best solution is course solution 2
 * Course Solution - 1
 * time - O(n*n ) - This is because recursion function will be called n times and within each time we execute loop
 * space - O(h) this used by callstack
 */
function reconstructBst(preOrderTraversalArray) {
    if (preOrderTraversalArray.length == 0) return null;
    let currentRootValue = preOrderTraversalArray[0], rightSubTreeIndex = preOrderTraversalArray.length;
    for (let i = 1; i < preOrderTraversalArray.length; i++) {
        if (preOrderTraversalArray[i] >= currentRootValue) {
            rightSubTreeIndex = i;
            break;
        }
    }
    let leftSubTree = reconstructBst(preOrderTraversalArray.slice(1, rightSubTreeIndex));
    let rightSubTree = reconstructBst(preOrderTraversalArray.slice(rightSubTreeIndex));
    return new BST(currentRootValue, leftSubTree, rightSubTree);
}



/**
 * Based on course solution but a bit better (uses approach of question 5), instead of creating new array, we pass indexes
 * 
 * time - O(n*n ) - This is because recursion function will be called n times and within each time we execute loop
 * space - O(h) this used by callstack
 */

function reconstructBst2(arr) {
  return reconstructBstHelper(arr,0,arr.length-1)
}

function reconstructBstHelper(arr, startIndex, endIndex,bst) {
  if(startIndex > endIndex) return null;
  const newBstNode = new BST(arr[startIndex]);
  if(!bst) bst = newBstNode;
  else {
    let property = 'left';
    if(bst.value < newBstNode.value) property = 'right';
    bst[property] = newBstNode;
    bst = bst[property];
  }
  let leftSubTreeEndIndex = endIndex;
  for(let i = startIndex+1; i<= endIndex; i++) {
      if(arr[i] >= arr[startIndex]) {
          leftSubTreeEndIndex =  i-1;
          break;
      }
  }
  reconstructBstHelper(arr,startIndex+1, leftSubTreeEndIndex,bst);
  reconstructBstHelper(arr,leftSubTreeEndIndex+1,endIndex,bst);
  return bst;
}


/**
 * My solution based on appraoch of quetion 5.
 * here instead of passing tree last tree, we are retuning tree and constructing left and right subtreess
 * 
 * time - O(n*n ) - This is because recursion function will be called n times and within each time we execute loop
 * space - O(h) this used by callstack
 */
function reconstructBst3(arr) {
  return reconstructBstHelper2(arr,0,arr.length-1)
}

function reconstructBstHelper(arr, startIndex, endIndex) {
    if(startIndex > endIndex) return null;
    const newBst = new BST(arr[startIndex]);
    let leftSubTreeEndIndex = endIndex;
    for(let i = startIndex+1; i<= endIndex; i++) {
        if(arr[i] >= arr[startIndex]) {
            leftSubTreeEndIndex =  i-1;
            break;
        }
    }
    newBst.left = reconstructBstHelper(arr,startIndex+1, leftSubTreeEndIndex);
    newBst.right = reconstructBstHelper(arr,leftSubTreeEndIndex+1,endIndex);
    return newBst;
}


/**
 * Course Solution 2
 */


// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
