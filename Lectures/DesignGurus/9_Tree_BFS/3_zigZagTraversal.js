
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  /**
   * @CourseSolution - use this one
   */
  function traverse(root) {
    result = [];
    if (root === null) {
      return result;
    }
  
    const queue = [];
    queue.push(root);
    leftToRight = true;
    while (queue.length > 0) {
      levelSize = queue.length;
      let currentLevel = [];
      for (i = 0; i < levelSize; i++) {
        currentNode = queue.shift();
  
        // add the node to the current level based on the traverse direction
        if (leftToRight) {
          currentLevel.push(currentNode.val);
        } else {
          currentLevel.unshift(currentNode.val);
        }
  
        // insert the children of current node in the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
      result.push(currentLevel);
      // reverse the traversal direction
      leftToRight = !leftToRight;
    }
  
    return result;
  }

  /**
   * 
   * //ccourse solution will not wwork if we not want array in result. see tushar solution, here we have clear distiction between 
   *  what is in current level and what is next level, so this can used in other problems 
   * Tushar Solutions - https://www.youtube.com/watch?v=vjt5Y6-1KsQ&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=16
   *  a) 2 Stack Solution (1 stack contains current level nodes, second one contains next level, can used )
   *    1)insert root in stack 1
   *    2)run loop until both stacks are not empty
   *    3)If stack1 is not empty, then pop from that stack and print element. push left chiild in stack 2, then right  in stack2. print the node.
   *    4)when stack 1 is empty then do same with stack 2, 1 diffrent through first insert right child in stack1, then left child to stack1.
   *    5)when either staack is empty, switch between stacks.Until and unless one stack is not empty do not move to another stack. one stack
   *      contains items of current level and other stack has items of next level.
   *    6)when both stacks are empty then move out from loop.  
   * 
   * b) uses deque with null as division to create 2 stacks.
   * 
   * c)uses a deque and a counter soltion
   */

  function zigZagTraverse(root) {
    const stack1 = [root], stack2 = [], resultArray = [];
    const configObjects = [
      {
        firstStack: stack1,
        firstChild: 'left',
        secondChild: 'right',
        secondStack: stack2,
        secondStackIndex: 1
      },
      {
        firstStack: stack2,
        firstChild: 'right',
        secondChild: 'left',
        secondStack: stack1,
        secondStackIndex: 0
      }
    ]
    let configObject = configObjects[0];

    while( stack1.length || stack2.length) {
      let currentNode = configObject.firstStack.pop();
      resultArray.push(currentNode.val);
      if(currentNode[configObject.firstChild]) configObject.secondStack.push(currentNode[configObject.firstChild]);
      if(currentNode[configObject.secondChild]) configObject.secondStack.push(currentNode[configObject.secondChild]);
      if(configObject.firstStack.length == 0) configObject = configObjects[configObject.secondStackIndex];
      
    }
    return resultArray; 
  }
  
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.right.left.left = new TreeNode(20);
  root.right.left.right = new TreeNode(17);
  console.log(`Zigzag traversal: ${traverse(root)}`);
  console.log(zigZagTraverse(root));