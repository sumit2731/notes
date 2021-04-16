class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else this.head = this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    /* 
        Later we will see better solution for this
        */
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length == 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    currentHead.next = null;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    // let node = this.head;
    // for(let i =0; i< index; i++) node = node.next;
    // return node;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      this.get(index).value = value;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new node with a value at a given position
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index == 0) return !!this.unshift(value);
    else if (index == this.length) return !!this.push(value);
    let newNode = new Node(value);
    let secondLastNode = this.get(index - 1);
    newNode.next = secondLastNode.next;
    secondLastNode.next = newNode;
    this.length++;
    return true;
  }

  /* 
    Removes the node at given position
    */
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    else if (index == 0) return this.shift();
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  /**
   * This is my solution using algo explained by Colt.This reverse
   *  problem is asked a lot in interviews. To see colt's solution
   *  see file 2
   */
  reverse() {
    let previousNode = this.head;
    let currentNode = previousNode.next;
    let nextNode = currentNode.next;
    previousNode.next = null;
    while (currentNode) {
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      nextNode = nextNode && nextNode.next;
    }
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
  }

  /**
   *
   * My Solution- Complexity is O(n*n). So it is
   * not advisable. also it depends upon function get.
   * hence second solution is reccommended.
   */

  reverse2() {
    for (let i = this.length - 1; i >= 1; i--) {
      let node = this.get(i);
      let lastNode = this.get(i - 1);
      node.next = lastNode;
      if (i == 1) lastNode.next = null;
    }
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
  }

  /**
   * Course solution. algo is same as rverse
   */
  reverse3() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  show() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }
  }
}

let list1 = new SinglyLinkedList();

list1.push(0);
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);
list1.reverse();
list1.show();
