class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /*
   *My solution using iteration
   Complexity -
    Time Complexity -
      Worst Case - O(n), It's possible that all nodes have one child and they are linear(figure 7),
      If tree is AVL tree the first case is O(log n)
   */
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let node = this.root;
    let property;
    while (true) {
      if (node.value == value) return undefined;
      else if (node.value < value) property = "right";
      else property = "left";
      if (!node[property]) {
        node[property] = newNode;
        return this;
      } else node = node[property];
    }
  }

  find(value) {
    if (!this.root) return false;
    let node = this.root;
    let property;
    while (node) {
      if (node.value == value) return node;
      else if (node.value > value) property = "left";
      else property = "right";
      node = node[property];
    }
    return false;
  }

  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  /* 
  node-left-Right
  Recursion Solution - Udemy
  Time Coplexity - O(n)
  Space Compleity - O(1)
  */
  preOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  /* 
  Iterative Solution
  There is a slightly better solution space complexity wise -https://www.geeksforgeeks.org/iterative-preorder-traversal/
  Algo - pop node from stack,push rightChild, then leftChild on Stack
  Time Compelxity - O(n) As we visit Each Node exactly Once
  Space Complexity - O(h), h is height of binary tree. in worst case, height can be O(n)
  */
  preOrder2() {
    let data = [],
      stack = [],
      node = this.root;
    stack.push(node);
    while (stack.length) {
      node = stack.pop();
      data.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return data;
  }

  //left-node-right
  //Recursive Solution - from udemy lecture
  postOrder() {
    let data = [];
    function transverse(node) {
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
      data.push(node.value);
    }
    transverse(this.root);
    return data;
  }
  /* 
  This is iterative solution by using 2 stacks.see postOrder31, it's my solution
  https://www.youtube.com/watch?v=qT65HltK2uE&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=10
  Algo - 1)pop from stack1, push into stack2
        2)Push left onto stack1
        3)Push right onto stack1
     Stack 2 has all elements in right order   
  Space Complexity - O(n) as we traverse each array once
  Time Complexity - O(n) as at last second aray will have all elements
  */
  postOrder2() {
    if (!this.root) return [];
    let stack1 = [],
      stack2 = [],
      data = [];
    stack1.push(this.root);
    while (stack1.length) {
      let node = stack1.pop();
      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
      stack2.push(node.value);
    }
    while (stack2.length > 0) {
      data.push(stack2.pop());
    }
    return data;
  }

  /* 
  This is iterative solution using 1 stack - By Tushat Roy
  Algo-
    1)current points to root
    2)push root into stack1
    3)current = current.left
    4)Repeat 2,3 until currnt is not null
    5)if last item of stack do not have rght child. pop it from stack.now we hve visisted 4
    6)check if last item popped is right child of

  Time Complexity - O(n)
  Space Complexity -O(h), where h is height of arraymax heigtn can be O(h)
  This solution can also be used to find height of the tree, whch is max length of stack
  */
  postOrder3() {
    if(!this.root) return [];
    let node = this.root;
    let data = [];
    let stack = [];
    while (stack.length || node) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        let tempNode = stack[stack.length - 1];
        if (tempNode.right) {
          node = tempNode.right;
        } else {
          tempNode = stack.pop();
          data.push(tempNode.value);
          while (stack.length && tempNode == stack[stack.length - 1].right) {
            tempNode = stack.pop();
            data.push(tempNode.value);
          }
        }
      }
    }
    return data;
  }
  /* 
  This is my solution using 2 stacks.
  Algo- First stack stores node and second stack stores node, whose childern are pushed
    ito first stack
  */
  postOrder31() {
    if (!this.root) return [];
    let nodeStack = [],
      parentStack = [],
      data = [];
    nodeStack.push(this.root);
    let node;
    while (nodeStack.length) {
      node = nodeStack[nodeStack.length - 1];
      if (node.left || node.right) {
        if (node == parentStack[parentStack.length - 1]) {
          data.push(nodeStack.pop().value);
          parentStack.pop();
        } else {
          if (node.right) nodeStack.push(node.right);
          if (node.left) nodeStack.push(node.left);
          parentStack.push(node);
        }
      } else data.push(nodeStack.pop().value);
    }
    return data;
  }

  /**
   * Recurvive solution - udemy lecture
   */
  inOrder() {
    let data = [],
      node = this.root;
    function transverse(node) {
      if (node.left) transverse(node.left);
      data.push(node.value);
      if (node.right) transverse(node.right);
    }
    transverse(this.root);
    return data;
  }

  /* 
  Reccursive Solution
  https://www.youtube.com/watch?v=nzmtCFNae9k&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=12
  Time Complexity - O(n),Since Each Node is visisted Once
  Space Complexity - depends upon size of stack, in worst case, size of stack will be height if tree that is O(h)
  In worst case height of tree can be tota number of ndoes
  */
  inOrder2() {
    if (!this.root) null;
    let data = [],
      stack = [];
    let node = this.root;
    while (node || stack.length) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        data.push(node.value);
        node = node.right;
      }
    }
    return data;
  }
}

/**
 * Compares whther 2 binary trees are same or not
 * TusharVideos
 */
function isSame(node1,nod2) {
  if((node1 == null) && (node2 == null)) return true;
  if((node1 == null) || (node2 == null)) return false;
  return (node1.value == node2.value) && isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
}

/**
* number of nodes on binay tree
* TusharVideos
*/
function sizeOfTree(node) {
  if(node == null) return 0;
  return 1 + sizeOfTree(node.left) + sizeOfTree(node.right);
}

/**
* height of binary tree -recurrsive
* TusharVideos
* Best Solution is third
*/

function heightOfTree(node) {
  if(!node) return 0;
  return 1+ Math.max(heightOfTree(node.left) , heightOfTree(node.right))
}

/**
 * Height using BFS(iterative)
 * GeekForGeeks
 */

function heightOfTree2(node) {
  let queue = [node, null], tempNode, depth = 0;
  while(queue.length) {
    tempNode = queue.shift();
    if(tempNode == null) depth++;
    else {
      if(tempNode.left) queue.push(tempNode.left);
      if(tempNode.right) queue.push(tempNode.right);
    }
    if((tempNode == null) && (queue.length > 0)) queue.push(null);
  }
  return depth;
}

/**
 * Height using BFS(iterataive)
 * Geek for Geeks
 */
function heightOfTree3(node) {
  let queue = [node], depth = 0;
  while(queue.length) {
    let size = queue.length;
    for(let i = 0; i<size ;i++) {
      let firstNode = queue.shift();
      if(firstNode.left) queue.push(firstNode.left);
      if(firstNode.right) queue.push(firstNode.right);
    }
    depth++;
  }
  return depth;
}

/**
* sum of binaryTree from root to leaf
* TusharVideos
*/

function sumOfAllNodes(node) {
  if(!node) return 0;
  return node.value + sumOfAllNodes(node.left) + sumOfAllNodes(node.right)
}

/**
 * Check whther sum of  root to leaf of anyPath of tree is equal to given number
 */
function sumOFCompletePath(node, sum) {
  if(!node) return false
  if((node.left == null) && (node.right == null)) {
    return (node.value == sum)
  }
  let remainingSum = sum - node.value;
  return sumOFOnePath(node.left,remainingSum) || sumOFOnePath(node.right, remainingSum)

}

/**
 * same as above but we also need path
 * Tushar Videos
 */
function rootToLeafSum(node, sum, path) {
  if(!node) return false;
  if((node.left == null) && (node.right == null)) {
      if(node.value == sum) {
          path.push(node.value);
          return true;
      } else return false;
  }
  let remainingSum = sum - node.value;
  if(rootToLeafSum(node.left, remainingSum, path) || rootToLeafSum(node.right, remainingSum, path)) {
      path.push(node.value);
      return true;
  }
  return false;
}

/**
 * check whether sum from root to any node is equal to given number
 */

function sumofAnyPath(node, sum) {
  if(!node) return false;
  if((node.left == null) && (node.right == null)) {
    return (node.value == sum)
  }
  let remainingSum = sum - node.value;
  if(remainingSum == 0) return true;
  return sumofAnyPath(node.left,remainingSum) || sumofAnyPath(node.right, remainingSum)
}

/**
 * Check if given binary tree is binary search tree. see the catch herewatch video
 * https://www.youtube.com/watch?v=MILxfAbIhrE&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=8
 */
function ifBInaryTree(node) {
  if(!node) return true;
  if(node.left && node.left.value >= node.value) return false;
  if(node.right && node.right.value <= node.value) return false;
  return (ifBInaryTree(node.left) && ifBInaryTree(node.right))
}




let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(25);
// tree.insert(23);
// tree.insert(35);
// tree.insert(7);
// tree.insert(9);
// tree.insert(45);
// tree.insert(2);
// tree.insert(1);
// tree.insert(0);
// tree.insert(-1);
// tree.insert(55);
// tree.insert(65);


//console.log(heightOfTree(tree.root));
console.log(heightOfTree2(tree.root));
//console.log(heightOfTree3(tree.root));
// console.log(sumOfAllNodes(tree.root));
// console.log(sizeOfTree(tree.root));
// let path = [];
// rootToLeafSum(tree.root,70,path);
// if(path.length) {
//   console.log(path)
// }

// console.log(ifBInaryTree(tree.root));