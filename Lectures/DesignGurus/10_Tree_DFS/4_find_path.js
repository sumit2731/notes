class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  //recursive solution
   function find_path(root, sequence) {
    function traverse(node, sequence, index) {
      if(!node) return false;
      if((sequence.length < index) || (sequence[index] != node.val)) return false;
      if(!node.left && !node.right && (index == sequence.length-1)) return true;
      return traverse(node.left, sequence, index+1) || traverse(node.right, sequence, index+1)
    }
    
    return traverse(root, sequence,0);
  }

  //iterative solution
  function find_path2(root, sequence) {
    let nodeStack = [root], pathStack = [[root.val]];
    while(nodeStack.length) {
      let currentNode = nodeStack.pop(), currentPath = pathStack.pop();
      let currentIndex = currentPath.length -1;
      if(sequence[currentIndex] == currentPath[currentIndex]) {
        if(!currentNode.left && !currentNode.right) return true;
        else {
          if(currentNode.right) {
            nodeStack.push(currentNode.right);
            pathStack.push([...currentPath, currentNode.right.val]);
          }
          if(currentNode.left) {
            nodeStack.push(currentNode.left);
            pathStack.push([...currentPath, currentNode.left.val]);
          }
        }
      }
    }
    return false;
  }
  
  
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  
  console.log(`Tree has path sequence: ${find_path2(root, [1, 0, 7])}`);
  console.log(`Tree has path sequence: ${find_path2(root, [1, 1, 6])}`);
  