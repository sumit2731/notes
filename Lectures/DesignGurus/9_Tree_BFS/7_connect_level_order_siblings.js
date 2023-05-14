class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
    // level order traversal using 'next' pointer
    print_level_order() {
      console.log("Level order traversal using 'next' pointer: ");
      let nextLevelRoot = this;
      while (nextLevelRoot !== null) {
        let current = nextLevelRoot;
        nextLevelRoot = null;
        while (current != null) {
          process.stdout.write(`${current.val} `);
          if (nextLevelRoot === null) {
            if (current.left !== null) {
              nextLevelRoot = current.left;
            } else if (current.right !== null) {
              nextLevelRoot = current.right;
            }
          }
          current = current.next;
        }
        console.log();
      }
    }
  }
  
  function connect_level_order_siblings(root) {
    let queue = [root];
    while(queue.length) {
        let currentlevelNodeCount = queue.length, currentNode, previousNodeOfCurrentLevel = null;
        for(let i = 0; i < currentlevelNodeCount; i++) {
            currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(previousNodeOfCurrentLevel) previousNodeOfCurrentLevel.next = currentNode;
            previousNodeOfCurrentLevel = currentNode;
        }
    }
  }
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  connect_level_order_siblings(root);
  
  root.print_level_order();
  