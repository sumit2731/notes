class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  /**
   * @MySolution - Course solution aarranges element level wise
   */
  function traverse(root) {
    let result = [], queue = [root];
    while(queue.length > 0) {
        let firstNode = queue.shift();
        if(firstNode.left) queue.push(firstNode.left);
        if(firstNode.right) queue.push(firstNode.right);
        result.push(firstNode.val);
    }
    // TODO: Write your code here
    return result;
  }
  /**
   * CoUrse Solution - I also solved it
   */
  function traverse2(root) {
    let result = [], queue = [root];
    while(queue.length > 0) {
        let size = queue.length, currentLevelNodes = [];
        for(let i = 0; i< size; i++) {
            let node = queue.shift();
            currentLevelNodes.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        } 
        result.push(currentLevelNodes);
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
  console.log(`Level order traversal: ${traverse(root)}`);
  console.log(`Level order traversal: ${traverse2(root)}`);
  