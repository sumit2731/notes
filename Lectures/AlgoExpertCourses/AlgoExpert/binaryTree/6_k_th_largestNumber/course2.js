// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(noOfNodesVisisted, latestVisistedNodeValue) {
      this.noOfNodesVisisted = noOfNodesVisisted;
      this.lastVisistedNodeValue = latestVisistedNodeValue;
  }
}


/**
* Time Complexity - O(h+k) => Even though we may need to find node with k = 1, in order to find that node we need to atleast
  go to node which is depth, for that time complexity os O(h).In most cases h is not going to be relevent,Infact h is absolute
  upper bound,In most cases you are not gonna have to perform to many more than k operation.but we need this H because we dnt 
  knw, where the kth largest node is going to be and what path we are going to follow.



we have to go down to the maxTree depth and faer going down we need to visist k nodes
*  For example in order to find 5th element in tree of height 3. first we need to get to bottom of tree then we need to
*      visist 5 nodes
* Space Compexity - O(h)
* h - height of Tree
*/
function findKthLargestValueInBst(root,k) {
  let treeInfo = new TreeInfo(0,-1);
  reverseInOrderTraversal(root,k,treeInfo);
  return treeInfo.lastVisistedNodeValue;
}


function reverseInOrderTraversal(node,k,treeInfo) {
  if(!node || treeInfo.noOfNodesVisisted >= k) return;
  reverseInOrderTraversal(node.right,k,treeInfo)
  if(treeInfo.noOfNodesVisisted < k) {
      treeInfo.noOfNodesVisisted++;
      treeInfo.lastVisistedNodeValue = node.value;
      reverseInOrderTraversal(node.left,k,treeInfo);
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
