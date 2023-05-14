class Node {
    constructor(key) {
        this.key = key;
        this.left = this.right = null;
    }
}

// utility function to create a new node
function newNode(key) {
    return new Node(key);
}

// function to find the  height of the tree
function height(root) {
    // initialising a variable to count the
    // height of tree
    let q = [];
    q.push(root);
    let height = 0;
    while (q.length > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let temp = q.shift();
            if (temp.left != null) {
                q.push(temp.left);
            }
            if (temp.right != null) {
                q.push(temp.right);
            }
        }
        height++;
    }
    return height;
}

// driver code
let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);

document.write("Height(Depth) of tree is: " + height(root));

// this code is contributed by Kirti Agarwal(kirtiagarwal23121999)