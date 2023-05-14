class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function find_level_averages(node) {
    let queue = [node], averagesArray = [];
    while(queue.length) {
        let levelNodeCount = queue.length, levelSum = 0, levelAverage = 0;
        for(let i = 0; i< levelNodeCount; i++) {
            let removedNode = queue.shift();
            if(removedNode.left) queue.push(removedNode.left);
            if(removedNode.right) queue.push(removedNode.right);
            levelSum += removedNode.val;
        }
        levelAverage = levelSum/levelNodeCount;
        averagesArray.push(levelAverage)
    }
    return averagesArray;
}
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level averages are: ${find_level_averages(root)}`);
  