class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  /**
   * @MySolution, see course solution for tat digits trick
   */
  function find_sum_of_path_numbers(root) {
    let rootToLeafNumbers = [];
    function calculateRootToLeafNumbers(root) {
      
      function traverse(root, digits) {
        if((root.val != 0) && !root.val) return;
        if(!root.left && !root.right) {
          rootToLeafNumbers.push(+digits);
        }
        if(root.left) traverse(root.left, digits.toString() + root.left.val.toString())
        if(root.right) traverse(root.right, digits.toString() + root.right.val.toString())
      }
      
      traverse(root,root.val.toString());
    }
    
    calculateRootToLeafNumbers(root);
    let sum = rootToLeafNumbers.reduce((accum, num) => accum + num, 0);
    return sum;
  }

  
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
  