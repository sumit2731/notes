class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @MYSolution Iterative One
 */
function count_paths(root, requiredSum) {
  let nodeStack = [root], dataStack = [{ sum: root.val, path: [root.val] }], allPaths = [];
  while (nodeStack.length) {
    let currentNode = nodeStack.pop(), currentDataObject = dataStack.pop(),
      currentPath = currentDataObject.path, currentSum = currentDataObject.sum;
    if (currentSum == requiredSum) allPaths.push([...currentPath])
    let currentSumCopy = currentSum, currentPathCopy = [...currentPath]
    for (let i = 0; i < currentPath.length; i++) {
      currentSumCopy -= currentPath[i];
      currentPathCopy.shift();
      if (currentSumCopy == requiredSum) {
        allPaths.push([...currentPathCopy]);
      }
    }
    if (currentNode.right) {
      nodeStack.push(currentNode.right);
      let dataObject = {
        sum: currentSum + currentNode.right.val,
        path: [...currentPath, currentNode.right.val]
      }
      dataStack.push(dataObject);
    }
    if (currentNode.left) {
      nodeStack.push(currentNode.left);
      let dataObject = {
        sum: currentSum + currentNode.left.val,
        path: [...currentPath, currentNode.left.val]
      }
      dataStack.push(dataObject);
    }
  }
  return allPaths;

}

/**
 * @courseSoluion
 * Time Complexity - O(n*n)
 */
function count_paths2(root, requiredSum) {
  let allPaths = [];
  function traverse(node, requiredSum, path) {
    if (!node.val) return false;
    path.push(node.val);
    let currentSum = 0, currentPath = [];
    for (i = path.length - 1; i >= 0; i--) {
      currentSum += path[i];
      currentPath.push(path[i]);
      if (currentSum == requiredSum) allPaths.push([...currentPath]);
    }
    if (node.left) traverse(node.left, requiredSum, path)
    if (node.right) traverse(node.right, requiredSum, path)
    path.pop();
  }
  traverse(root, requiredSum, []);
  return allPaths;
}

/**
 * Optimized Course Solution - O (n)
 * see course solution for details
 */
function count_paths3 (root, requiredSum) {
  let allPathCount = 0,  map = new Map();
  
  function traverse(node,map,currentPathSum ) {
    if(!node) return false;
    currentPathSum += node.val;
    
    if(currentPathSum == requiredSum) allPathCount++;
    
    if(map.has(currentPathSum-requiredSum)) {
      allPathCount += map.get(currentPathSum-requiredSum)
    }
    map.set(currentPathSum, (map.get(currentPathSum) + 1)|| 1);
    
    if(node.left)traverse(node.left,map,currentPathSum)
    if(node.right)traverse(node.right,map,currentPathSum)
    map.set(currentPathSum, map.get(currentPathSum)-1)
  }
  traverse(root,map,0);
  return allPathCount;
}


// const root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);

const root = new TreeNode(1);

root.left = new TreeNode(7);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(5);

root.right = new TreeNode(9);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(3);


console.log(count_paths3(root,12));