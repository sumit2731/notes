class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(25);

root.left = new TreeNode(18);
root.left.left = new TreeNode(19);
root.left.left.right = new TreeNode(15);
root.left.right = new TreeNode(20);
root.left.right.left = new TreeNode(18);
root.left.right.right = new TreeNode(25);

root.right = new TreeNode(50);
root.right.left = new TreeNode(35);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(40);
root.right.left.left.right = new TreeNode(25);


root.right.right = new TreeNode(60);
root.right.right.left = new TreeNode(55);
root.right.right.right = new TreeNode(70);



function largestBSTLength(root) {
  function largestBSTHelper(node) {
    if(!node) return {isBST: true, length: 0, minValue: -Infinity, maxValue: Infinity}
    if(!node.left && !node.right) return ({isBST: true,length:1, minValue: node.value,maxValue: node.value});
    const leftSubTree = largestBSTHelper(node.left);
    const rightSubTree = largestBSTHelper(node.right);
    let isBST = true, length = 0,minValue = node.value, maxValue = node.value;
    if(!leftSubTree.isBST || rightSubTree.isBST || (leftSubTree.maxValue > node.value) || (rightSubTree.minValue <= node.value)) {
      isBST = false;
      length = Math.max(leftSubTree.length,rightSubTree.length);
      return {isBST,length,minValue,maxValue}
    }
    length = 1 + leftSubTree.length + rightSubTree.length;
    minValue = leftSubTree.length ? leftSubTree.minValue : node.value;
    maxValue = rightSubTree.length ? rightSubTree.maxValue : node.value;
    return {isBST,length,minValue,maxValue};
  }
  let {length} = largestBSTHelper(root);
  return length;
}

console.log(largestBSTLength(root));