/* 
*count the  number of nodes present in binary tree
*/

function count(root) {
    let nodeCount = 0;
    function innerFunction(node) {
        if(node) {
            nodeCount++;
            if(node.left) innerFunction(node.left);
            if(node.right) innerFunction(node.right);
        }
        else return;
    }
}

function count2(root) {
  if(root == null) return 0;
  let leftSize = count2(root.left);
  let rightSize = count2(root.right);
  return  1+ leftSize + rightSize;
}