function findClosestValueInBst(tree, target) {
    // Write your code here.
    let node = tree, closestDifference = Infinity, closestValue;
    while(node) {
      let currentDifference = Math.abs(target-node.value);
      if(closestDifference > currentDifference) {
        closestDifference = currentDifference;
        closestValue = node.value
        if(node.value == target) return node.value
        else if(node.value >target) node = node.left
        else node = node.right
      }
      else {
        return closestValue;
      }
      
    }
    return closestValue;
}
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  