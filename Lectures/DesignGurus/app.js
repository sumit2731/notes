class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


class MaximumPathSum {
  find_maximum_path_sum(root) {
    this.globalMaximumSum = -Infinity;
    this.find_maximum_path_sum_recursive(root);
    return this.globalMaximumSum;
  }

  find_maximum_path_sum_recursive(node) {
    if(!node) return 0;
    let leftTreeSum = this.find_maximum_path_sum_recursive(node.left);
    let rightTreeSum = this.find_maximum_path_sum_recursive(node.right);
    if()
    return node.val + Math.max(leftTreeSum, rightTreeSum);
  }
}


const maximumPathSum = new MaximumPathSum();
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);
