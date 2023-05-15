class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  /**
   * @Course_Solution
   */
  function find_path(root, sequence) {
    sequence = sequence.reduce((accum, num) => accum.toString() + num.toString());
    function traverse(root, path) {
        if(!root.left && !root.right) {
            if(path == sequence) return true;
            else return false;
        }
        if(path !== sequence.slice(0, path.length)) return false;
        let isSequencePresent = false;
        if(root.left) isSequencePresent = traverse(root.left, ((path.toString()) + (root.left.val.toString())))
        if(isSequencePresent) return true;
        if(root.right)isSequencePresent = traverse(root.right, ((path.toString()) + (root.right.val.toString())));
        return isSequencePresent;
    }
    return traverse(root, root.val.toString());
  }

  /**
   * @CourseSolution
   */
  function find_path(root, sequence) {
    if (root === null) {
      return sequence.length === 0;
    }
  
    return find_path_recursive(root, sequence, 0);
  }
  
  
  function find_path_recursive(currentNode, sequence, sequenceIndex) {
    if (currentNode === null) {
      return false;
    }
  
    const seqLen = sequence.length;
    if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
      return false;
    }
  
    // if the current node is a leaf, add it is the end of the sequence, we have found 
    // a path!
    if (currentNode.left === null && currentNode.right === null 
                                  && sequenceIndex === seqLen - 1) {
      return true;
    }
  
    // recursively call to traverse the left and right sub-tree
    // return true if any of the two recursive call return true
    return find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
      find_path_recursive(currentNode.right, sequence, sequenceIndex + 1);
  }
  
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
  