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

  /* My solution using reccursion*/

  /*  insert2(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    function innerFunction(value, node) {
      let property;
      if (node.value > value) property = "left";
      else property = "right";
      if (node[property]) innerFunction(value, node[property]);
      else node[property] = newNode;
    }
    innerFunction(value, this.root);
  } */

  /* 
  *It can be solved by iteration as well as reccursion

  */
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
  
  /* 
  Course Solution
  */

/*   find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  } */
}

let tree = new BinarySearchTree();
tree.insert(100);
tree.insert(50);
tree.insert(150);
tree.insert(25);
tree.insert(75);
tree.insert(125);
tree.insert(175);
console.log(tree.find(25));
console.log(tree.find(175));
