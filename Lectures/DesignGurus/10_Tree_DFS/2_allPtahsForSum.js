class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @MySolution - It uses recursion but it prints only 1 path
 */
function find_paths(root, sum) {
  let path = [];
  function traverse(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right && (sum == root.val)) {
      path.push(root.val);
      return true;
    }
    if (traverse(root.left, sum - root.val) || traverse(root.right, sum - root.val)) {
      path.push(root.val);
      return true;
    }
  }
  if (traverse(root, sum)) return path;
  else return false
}

/**
 * @MySolution - My Solution it prints all paths.
 * but we are copying the path array for each iteration.
 * see course solution which is most optimized
 */
function find_paths(root, sum) {
  let allPaths = [];
  function traverse(root, sum, path) {
    if (!root) return false;
    let newPath = [...path, root.val]
    if (!root.left && !root.right && (sum == root.val)) {
      allPaths.push(newPath);
      return;
    }

    traverse(root.left, sum - root.val, newPath)
    traverse(root.right, sum - root.val, newPath)
  }
  traverse(root, sum, [])
  return allPaths
}

/**
 * @MySolutionWithMultiPlepaths - It uses same path array. just adds and removes current node from it
 * Course solution is 0.1 % better as it declares less variable
 */
function find_paths2(root, sum) {
  let allPaths = [];
  function traverse(root, sum, path) {
    if (!root) return false;
    if (!root.left && !root.right && (sum == root.val)) {
      allPaths.push(newPath);
      return;
    }

    if (traverse(root.left, sum - root.val, newPath)) {
      allPaths.push(root.value);
    }
    if (traverse(root.right, sum - root.val, newPath)) {
      allPaths.push(root.value);
    }
  }
  traverse(root, sum, [])
  return allPaths
}

/**
 * @CourseSolution - This i sbest amoungst the lot
 */
function find_paths(root, sum) {
  allPaths = [];
  function traverse(root, sum, currentPath) {
    if (!root) return false;
    currentPath.push(root.val);
    if (!root.left && !root.right && (root.val == sum)) {
      allPaths.push([...currentPath]);
    }
    else {
      traverse(root.left, sum - root.val, currentPath);
      traverse(root.right, sum - root.val, currentPath);
    }
    currentPath.pop();
  }
  traverse(root, sum, []);
  return allPaths;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = find_paths2(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
