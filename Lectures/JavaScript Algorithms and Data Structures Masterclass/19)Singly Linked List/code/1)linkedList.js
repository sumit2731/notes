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

  /**
   * insert value at last
   * O = O(1)
   */
  push(value) {
    let node = new Node(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else this.head = this.tail = node;
    this.length++;
    return this;
  }

  /**
   * remove value at last
   * O = O(n)
   */
  pop() {
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
    //if linked list had only 1 nodes
    if (this.length == 0) {
      this.head = this.tail = null;
    }
    return current;
  }

   /**
   * remoev value for begining
   * O = O(1)
   */
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    currentHead.next = null;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return currentHead;
  }

  /**
   * Insert value at begining
   * O = O(1)
   */
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

  /**
   * Get value at given index, starts from 0
   * O= O(n)
   */
  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  
  //my solution
  get2(index) {
    if(this.length <= index || index < 0) return null;
    let node = this.head;
    for(let i = 0; i<=i-1 ;i++) node = node.next;
    return node;
  }

  /**
   * Change value at given index
   * O = O(n)
   */
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
   * O = O(n)
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
    O = O(n)
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
   * This is asked a lot in interview questions
   * Course solution.
   * O- O(n)
   */
  reverse() {
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

  /**
   * My Solution with same complexity and same approach
   * Both are equivalent
   */
  reverse2() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null, nextNode = null;
    while(node) {
      nextNode = node.next;
      node.next = prevNode;;
      prevNode = node;
      node = nextNode;
    }
  }

  /**
   * Prints each and every node of linked list
   * 
   */
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
