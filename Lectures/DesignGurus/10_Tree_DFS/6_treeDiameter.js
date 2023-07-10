class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class Height {
    constructor() {
      this.h = 0;
    }
  }
  
  class TreeDiameter {
    constructor() {
      this.treeDiameter = 0;
    }
    
    /**
     * CourseSolution - Just prints Diameter
     */
    find_diameter(root) {
      this.calculate_height(root);
      return this.treeDiameter;
    }
  
    calculate_height(currentNode) {
      if (currentNode === null) {
        return 0;
      }
  
      const leftTreeHeight = this.calculate_height(currentNode.left);
      const rightTreeHeight = this.calculate_height(currentNode.right);
  
      // if the current node doesn't have a left or right subtree, we can't have
      // a path passing through it, since we need a leaf node on each side
      if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
        // diameter at the current node will be equal to the height of left subtree +
        // the height of right sub-trees + '1' for the current node
        const diameter = leftTreeHeight + rightTreeHeight + 1;
  
        // update the global tree diameter
        this.treeDiameter = Math.max(this.treeDiameter, diameter);
      }
  
      // height of the current node will be equal to the maximum of the heights of
      // left or right subtrees plus '1' for(the current node
      return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    }

    /**
     * CourseSolution Modified by Me - Also Prints the Path
     */
    find_diameter2(root) {
      let largestDiameter = 0, largestPath = [];
      function findHeight(node, path) {
        if(!node) return{height: 0, path}
        let leftSubtreeHeight = 0, rightSubTreeHeight = 0, leftSubtreePath =path, rightSubtreePath = path;
        if(node.left) ({height: leftSubtreeHeight, path:leftSubtreePath } = findHeight(node.left, [...path,node.left.val] ));
        if(node.right) ({height: rightSubTreeHeight, path: rightSubtreePath} = findHeight(node.right, [...path, node.right.val]));
        if(leftSubtreeHeight && rightSubTreeHeight) {
          let currentDiamater = leftSubtreeHeight + rightSubTreeHeight + 1;
          if(currentDiamater > largestDiameter) {
            largestDiameter = currentDiamater;
            largestPath = [];
            for(let i = leftSubtreePath.length-1; i >= path.length; i--) largestPath.push(leftSubtreePath[i]);
            for(let j = path.length-1; j < rightSubtreePath.length; j++) largestPath.push(rightSubtreePath[j]);
          }
        }
        let maxHeight = 0, maxHeightPath = [];
        if(leftSubtreeHeight > rightSubTreeHeight) {
          maxHeight = leftSubtreeHeight + 1;
          maxHeightPath = leftSubtreePath;
        } else {
          maxHeight = rightSubTreeHeight + 1;
          maxHeightPath = rightSubtreePath
        }
        return {height: maxHeight, path: maxHeightPath}
      }
      findHeight(root, [root.val]);
      return {largestDiameter, largestPath}
    }

    findHeight(node) {
      if(!node) return 0;
      return Math.max(this.findHeight(node.left), this.findHeight(node.right)) +1;
    }

    /**
     * Geek For Geeks Solution - UnOptimized One
     * https://www.geeksforgeeks.org/diameter-of-a-binary-tree/
     * Time Complexity - O(n * n)
     * Space - O(n) for callStack
     */

    find_diameter3(node) {
      if(!node) return 0;
      let leftSubTreeHeight = this.findHeight(node.left);
      let rightSubTreeHeight = this.findHeight(node.right);

      let currentDiamater = 1 + leftSubTreeHeight + rightSubTreeHeight;

      let leftDiameter = this.find_diameter3(node.left);
      let rightDiameter = this.find_diameter3(node.right);

      return Math.max(currentDiamater, leftDiameter, rightDiameter);
    
    }

    /**
     * MoreOptimized solution in Geeks For Geeks
     * https://www.geeksforgeeks.org/diameter-of-a-binary-tree/
     * Time Complexity - O(n)
     * Space Complexity - O(n)
     */
    find_diameter4(root) {
      let height = new Height();
      function calculateDiameter(node, height) {
        if(!node) {
          height.h = 0;
          return 0;
        }
        let leftTreeHeight = new Height();
        let rightTreeHeight = new Height();

        let leftDiameter = calculateDiameter(node.left, leftTreeHeight);
        let rightDiameter = calculateDiameter(node.right, rightTreeHeight);

        height.h = Math.max(leftTreeHeight.h, rightTreeHeight.h) + 1;
        let currentNodeDiameter = leftTreeHeight.h + 1 + rightTreeHeight.h
        return Math.max(currentNodeDiameter, leftDiameter, rightDiameter);
  
      }
      return calculateDiameter(root, height)
    }

    /**
     * Iterative Solution - https://tech-guidance.com/the-diameter-of-a-binary-tree/
     */

    find_diameter5(root) {
      let nodeHeightMap = new Map(), nodeStack = [], maxDiameter =0;
      nodeStack.push(root);
      nodeHeightMap.set(root,0);
      while(nodeStack.length) {
        let currentNode = nodeStack[nodeStack.length-1]
        //this means childNodes are not processed
        if(nodeHeightMap.get(currentNode) != null && nodeHeightMap.get(currentNode) == 0) {
          //setting one to indiacte that children will be processed now
          nodeHeightMap.set(currentNode, 1);
          if(currentNode.right) {
            nodeStack.push(currentNode.right);
            nodeHeightMap.set(currentNode.right,0)
          }
          if(currentNode.left) {
            nodeStack.push(currentNode.left);
            nodeHeightMap.set(currentNode.left,0);
          }
        }
        //childNodes are processed
        else {
          nodeStack.pop();
          let leftSubTreeHeight = currentNode.left ? nodeHeightMap.get(currentNode.left) : 0;
          let rightSubTreeHeight = currentNode.right ? nodeHeightMap.get(currentNode.right): 0;
          maxDiameter = Math.max(leftSubTreeHeight+1+rightSubTreeHeight, maxDiameter);
          nodeHeightMap.set(currentNode, Math.max(leftSubTreeHeight,rightSubTreeHeight) +1)
        }

      }
      return maxDiameter;

    }
    /**
     * Geek for Geeks mentions a morris traverse algo that I am not able to understand
     */
  }
  
  
  const treeDiameter = new TreeDiameter();
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(6);
  // let {largestPath, largestDiameter} = treeDiameter.find_diameter2(root);
  // console.log(largestDiameter);
  // console.log(largestPath);

  console.log(`Tree Diameter: ${treeDiameter.find_diameter4(root)}`);
  
  root.left.left = null;
  root.right.left.left = new TreeNode(7);
  root.right.left.right = new TreeNode(8);
  root.right.right.left = new TreeNode(9);
  root.right.left.right.left = new TreeNode(10);
  root.right.right.left.left = new TreeNode(11);
  // const treeDiameter2 = new TreeDiameter();
  // let {largestPath: largestPath2, largestDiameter: largestDiameter2} = treeDiameter2.find_diameter2(root);
  // console.log(largestDiameter2);
  // console.log(largestPath2);
  console.log(`Tree Diameter: ${treeDiameter.find_diameter4(root)}`);
  