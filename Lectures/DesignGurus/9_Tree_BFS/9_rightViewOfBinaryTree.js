class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function tree_right_view(root) {
    let result = [], queue = [root];
    while(queue.length) {
        let currentLevelNodeCount = queue.length,currentLevelRightViewNode = [];
        for(let i = 0; i < currentLevelNodeCount; i++) {
            currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(i == currentLevelNodeCount-1) currentLevelRightViewNode = currentNode
        }
        result.push(currentLevelRightViewNode);
    }
    // TODO: Write your code here
    return result;
  }
  //optimized version of my code
  function tree_right_view(root) {
    let result = [], queue = [root];
    while(queue.length) {
        let currentLevelNodeCount = queue.length,currentLevelRightViewNode = [];
        for(let i = 0; i < currentLevelNodeCount; i++) {
            currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            currentLevelRightViewNode = currentNode
        }
        result.push(currentLevelRightViewNode);
    }
    // TODO: Write your code here
    return result;
  }
  
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(3);
  result = tree_right_view(root);
  process.stdout.write('Tree right view: ');
  for (i = 0; i < result.length; i++) {
    process.stdout.write(`${result[i].val} `);
  }
  