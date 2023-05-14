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
   *My solution using iteration - course soliton is also same
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

  insert2(value) {
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
  }

  /**
   * @MySolution and Course Solution using iteration
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
  
  
  /**
   * @MySolution using Recursion
   */
  find2(value) {
    function innerFunction(node, value) {
      if(!node) return node;
      let property = '';
      if (node.value == value) return node
      else if(node.value > value) property = 'left';
      else property = 'right';
      node = node[property]
      return innerFunction(node, value);
    }
    return innerFunction(this.root, value)
  }
  
}

let tree = new BinarySearchTree();
tree.insert(100);
tree.insert(50);
tree.insert(150);
tree.insert(25);
tree.insert(75);
tree.insert(125);
tree.insert(175);
console.log(tree.find2(250));
console.log(tree.find2(175));
