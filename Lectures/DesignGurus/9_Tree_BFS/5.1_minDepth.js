class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function find_minimum_depth(root) {
    let minimumTreeDepth = 0, queue = [root];
    while(queue.length) {
        let levelCount = queue.length;
        minimumTreeDepth++;
        for(let i = 0; i< levelCount; i++) {
            let currentNode = queue.shift();
            if(!currentNode.left && !currentNode.right) return minimumTreeDepth;
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    // TODO: Write your code here
    return minimumTreeDepth;
  }
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
  root.left.left = new TreeNode(9);
  root.right.left.left = new TreeNode(11);
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
  