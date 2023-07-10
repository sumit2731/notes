class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * We are implementing stack using single linked list
 * 
 * Since  complexity of pop in singly linked list is O(n), we will add remove items from begining of the list
 * so shift and unshift for linked list becomes push and pop for stack
 * Itemms are added and removed from begining of linked list
 * 
 * If we use doubly linked list then we can add or removed for any end
 */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Here we are adding element at begining of linked list
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