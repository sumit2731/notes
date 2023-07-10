class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
/**
 * @CourseSolution
 * Can also be solved by recursion, see Data &AlgoRithms
 */

  function find_maximum_depth(root) {
    let queue = [root], currentDepth = 0;
    while(queue.length) {
        currentDepth++;
        let currentLevelNodeCount = queue.length;
        for(let i = 0; i < currentLevelNodeCount; i++) {
            let currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    return currentDepth;
  }
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
  root.left.left = new TreeNode(9);
  root.right.left.left = new TreeNode(11);
  console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
  