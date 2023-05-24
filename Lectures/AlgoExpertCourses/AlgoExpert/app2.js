// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      let node = this;
      while(true) {
        let property;
        if(value < node.value) property = 'left';
        else property = 'right';
        if(!node[property]) {
          node[property] = new BST(value);
          return this;
        }
        else node = node[property]
      }
      return this;
    }
  
    contains(value) {
      let node = this;
      while(node) {
        if(node.value == value) return true;
        else if(node.value > value) node = node.left;
        else node = node.right;
      }
      return false;
    }
  
    remove(value) {
      let node = this, parentNode = null;
      //find the node
      while(node) {
        if(node.value = value) break;
        else if(node.value > value) {
            parentNode = node;
            node = node.right;
        }
        else {
            parentNode = node;
            node = node.right;
        }
      }
      if(parentNode) {
        
      }
      
      
      
    }
  
    getleftMostNodeinRightSubtree(node) {
      if(!node.right) return node;
      node = node.right;
      let targetNode;

      if(node.left?.left) {
        while(node.left.left) node = node.left;
        targetNode = node.left;
        node.left = null;
        return targetNode;
      }
      else if(!node.left) {
        
      }
      while(node.left) {
        node = node.left
      }
      return node;
    }
  
  // Do not edit the line below.
  exports.BST = BST;
  