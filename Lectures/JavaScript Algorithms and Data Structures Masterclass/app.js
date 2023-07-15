class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);

root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(7);


root.right = new TreeNode(14);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(15);
root.right.right.right = new TreeNode(22);


function reverseInOrder(root) {
  let data = [];
  function transverse(node) {
    if (node.right) transverse(node.right);
    data.push(node.value);
    if (node.left) transverse(node.left);
  }
  transverse(root);
  return data;
}

console.log(reverseInOrder(root));

