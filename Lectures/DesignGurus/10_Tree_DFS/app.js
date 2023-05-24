class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class TreeDiameter {
    constructor() {
        this.treeDiameter = 0;
        this.path = [];
    }

    find_diameter(root) {
        this.treeTraverse2(root,[]);
        console.log(this.treeDiameter);
        console.log(this.path);
    }

    treeTraverse(node) {
        if (!node) return 0;
        let leftTreeDepth = this.treeTraverse(node.left);
        let rightTreeDepth = this.treeTraverse(node.right);
        if (leftTreeDepth && rightTreeDepth) {
            this.treeDiameter = Math.max(this.treeDiameter, leftTreeDepth + 1 + rightTreeDepth);
        }
        return Math.max(leftTreeDepth, rightTreeDepth) + 1;
    }

    treeTraverse2(node, path) {
        if (!node) return {length: 0, path}
        path.push(node.val);
        let leftTreeDepth = 0, leftTreePath = [], rightTreeDepth =0, rightTreePath = [];
        if(node.left) ({length: leftTreeDepth, path: leftTreePath} = this.treeTraverse2(node.left,path))
        if(node.right) ({length: rightTreeDepth, path: rightTreePath } = this.treeTraverse2(node.right,path))
        if (leftTreeDepth && rightTreeDepth) {
            let currentTreeDepth = leftTreeDepth + 1 + rightTreeDepth;
            if(this.treeDiameter < currentTreeDepth) {
                this.treeDiameter = currentTreeDepth;
                this.path = [];
                for(let i = leftTreePath.length-1 ; i >= path.length; i--) {
                    this.path.push(leftTreePath[i]);
                }
                
                for(let j = path.length-1; j <rightTreePath.length; j++ ) {
                    this.path.push(rightTreePath[j])
                }
            }
        }
        let maxLength = 1, maxPath = [...path];
        if(leftTreeDepth || rightTreeDepth) {
            if(leftTreeDepth >= rightTreeDepth) {
                maxLength = leftTreeDepth+1;
                maxPath = [...leftTreePath]; 
            } else if(rightTreeDepth > leftTreeDepth) {
                maxLength = rightTreeDepth+1;
                maxPath = [...rightTreePath];
            }
        }
        path.pop();
        return {path: maxPath, length:maxLength}
    }
}


const treeDiameter = new TreeDiameter();
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`);
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`);
