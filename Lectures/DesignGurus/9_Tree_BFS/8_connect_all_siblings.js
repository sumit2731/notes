class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
  
    // tree traversal using 'next' pointer
    print_tree() {
      process.stdout.write("Traversal using 'next' pointer: ");
      let current = this;
      while (current !== null) {
        process.stdout.write(`${current.val} `);
        current = current.next;
      }
    }
  }
  
  function connect_all_siblings(root) {
    let queue = [root], previousNodeOfCurrentLevel = null;
    while(queue.length) {
        let currentlevelNodeCount = queue.length, currentNode;
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
  connect_all_siblings(root);
  root.print_tree();
  