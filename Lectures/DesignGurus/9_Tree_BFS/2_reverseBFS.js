class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

/**
 * Tushar also has this question - https://www.youtube.com/watch?v=D2bIbWGgvzI&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=14
 * but there level wise array is not required, there we print all numbers in single array
 * Tushar uses queue and stack to solve this.
 * Course says we can use deque for this which is also right. but main thing to remeber is to have solution here element can be inserted
 *  in constant time, here array has O(n) while insertung in begining 
 */
function traverse(root) {
    const result = [], queue = [root];
    while(queue.length) {
        let currentLevelNodeCount = queue.length;
        const currentLevelNodes =[];
        for(let i = 0; i < currentLevelNodeCount; i++ ) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            currentLevelNodes.push(currentNode.value);
        }
        result.unshift(currentLevelNodes);
    }
    return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(traverse(root));