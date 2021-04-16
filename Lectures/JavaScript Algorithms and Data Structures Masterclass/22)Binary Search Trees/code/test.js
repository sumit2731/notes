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
