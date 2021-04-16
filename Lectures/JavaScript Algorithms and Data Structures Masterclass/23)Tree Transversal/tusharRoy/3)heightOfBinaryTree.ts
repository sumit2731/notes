//My Solution
function treeHeight(tree) {
  let maxHeight = 0;
  let q = [];
  let nodeObj = { node: tree.root, height: 1 };
  while (nodeObj.node || q.length) {
    if (nodeObj.node) {
      q.push(nodeObj);
      nodeObj = { node: nodeObj.node.left, height: nodeObj.height + 1 };
    } else {
      nodeObj = q.pop();
      maxHeight = Math.max(maxHeight, nodeObj.height);
      nodeObj = { node: nodeObj.node.right, height: nodeObj.height + 1 };
    }
  }
  return maxHeight;
}
//My Solution -Optimized
function treeheight2(tree) {
  let maxHeight = 0;
  let q = [];
  let nodeObj = { node: tree.root, height: 1 };
  while (nodeObj.node || q.length) {
    let node = nodeObj.node;
    if (node) {
      if (node.left && !node.right)
        nodeObj = { node: node.left, height: nodeObj.height + 1 };
      else if (!node.left && node.right)
        nodeObj = { node: node.right, height: nodeObj.height + 1 };
      else if (node.left && node.right) {
        q.push(nodeObj);
        nodeObj = { node: node.left, height: nodeObj.height + 1 };
      } else {
        //no left -no right
        maxHeight = Math.max(maxHeight, nodeObj.height + 1);
        nodeObj = { node: null, height: 0 };
      }
    } else nodeObj = q.pop();
  }
}

//Course Solution
/* 
Time Complexity - O(n)
Sace Cpmplexity - size of stack will be height of tree, which O(n) in owrts case
*/

function treeHeight3(node) {
    if(node) return 0;
    return Math.max(treeHeight3(node.left), treeHeight3(node.right)) + 1;
    
} 
