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

class TreeInfo {
    constructor(rootIdx) {
        this.rootIdx = rootIdx;
    }
}

function reconstructBst(preOrderTraversalArray) {
    let treeInfo = new TreeInfo(0);
    return reconstructBstFromRange(-Infinity,Infinity,treeInfo, preOrderTraversalArray);
}

function reconstructBstFromRange(minBound,maxBound,treeInfo, preOrderTraversalArray) {
    if(treeInfo.rootIdx == preOrderTraversalArray.length) return null;
    let currentIndex = treeInfo.rootIdx, currentRootValue = preOrderTraversalArray[currentIndex];
    if((currentRootValue < minBound) || (currentRootValue >= maxBound)) return null;
    treeInfo.rootIdx++;
    let leftSubTree = reconstructBstFromRange(minBound,currentRootValue,treeInfo,preOrderTraversalArray);
    let rightSubTree = reconstructBstFromRange(currentRootValue,maxBound,treeInfo,preOrderTraversalArray);
    return new BST(currentRootValue,leftSubTree,rightSubTree);
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
