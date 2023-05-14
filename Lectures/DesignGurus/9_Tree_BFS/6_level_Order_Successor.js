class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function find_successor(root, key) {
    let queue = [root], nodeFound = false;
    while(queue.length) {
        let currentLevelNodeCount = queue.length;
        for(let i = 0; i< currentLevelNodeCount; i++) {
            let currentNode = queue.shift();
            if(nodeFound) return currentNode
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(currentNode.val == key) nodeFound = true;
        }
    }
    return root;
  }
  
  var root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  let result = find_successor(root, 3)
  if (result) {
    console.log(result.val);
  }
  
  root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  
  result = find_successor(root, 9);
  if (result) {
    console.log(result.val);
  }
  
  result = find_successor(root, 12);
  if (result) {
    console.log(result.val);
  }
  