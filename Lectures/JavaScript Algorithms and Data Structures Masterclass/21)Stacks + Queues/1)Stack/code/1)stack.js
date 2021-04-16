class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* 
    this is actually unshift for linked list, since this is stack
    so we are calling it push 
    */
  push(value) {
    let newNode = new Node(value);
    if (!this.first) this.first = this.last = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    //this.size++;
    return ++this.size;
  }

  /* 
  Since Big O of pop for linked list is O(n),But push of stack needs to have big O
  of O(1), so we are using shift of linked list. but as this is stack so we are calling it
  pop
  */
  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    if (this.size == 0) this.last = null;
    return removedNode.value;
  }
}