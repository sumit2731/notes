class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * insert value at last
   * O = O(1)
   */
  push(value) {
    let node = new Node(value);
    if(this.length) {
      this.tail.next = node;
      this.tail = node;
    }
    else this.head =this.tail= node;
    this.length++;
    return this;
  }
  
  /**
   * remove value at last
   * O = O(n)
   */
  pop() {
    if(!this.length) return undefined;
    let currentTail = this.start;
    let secondLastNode = this.start;
    while(currentTail.next) {
      secondLastNode = currentTail;
      currentTail = currentTail.next;
    }
    this.tail = secondLastNode;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) this.head = this.tail =  null;
    return currentTail;
  }

  /**
   * remoev value for begining
   * O = O(1)
   */
  shift() {
    if(!this.length) return undefined;
    let oldHead = this.head;
    oldHead.next = null;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) this.tail = null;
    return oldHead;
  }

  /**
   * Insert value at begining
   * O = O(1)
   */
  unShift(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    if(this.length === 1) this.tail = newHead; 
    return this;
  }

  /**
   * Get value at given index, starts from 0
   * O= O(n)
   */
  get(index) {
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
    if(node) {
      node.value = value;
      return true;
    }
    return false;
  }

  
  /**
   * Inserts a new node with a value at a given position
   * O = O(n)
   */
  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    else if(index == 0) return !!this.unShift(value);
    else if(index == this.length) return !! this.push(value);
    else {
      let newNode = new Node(value);
      let lastNode = this.get(index-1);
      newNode.next = lastNode.next;
      lastNode.next =  newNode;
      this.length++;
      return true;
    }
  }
  
 /* 
  *  Removes the node at given position
  *  O = O(n)
  */
  remove(index) {
    if(index < 0 || index >= this.length) return false;
    if(index == 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let previousNode = this.get(index-1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next.next;
    return removedNode;
  }

  // reverse() {
  //   if(!this.length) return;
  //   for(let i = length-1; i<=0; i--) {
  //     let prevNode = this.get(i-1);
  //     let node = prevNode.next;
  //     node.next = prevNode;
  //   }
  //   let oldHead = this.head;
  //   oldHead.next = null;
  //   this.head = this.tail;
  //   this.tail = oldHead;
  // }
  reverse() {
    let prevNode = this.head;
    let node = prevNode.next;
    let nextNode = node.next;
    while(node) {
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
      nextNode = node && node.next;
    }
    let oldHead = this.head;
    oldHead.next = null;
    this.head = this.tail;
    this.tail = oldHead;

  }

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
  show() {
    let node = this.head;
    while(node) {
      console.log(node.value);
      node = node.next
    }
  }

}

let l1 = new LinkedList();
l1.push(0);
l1.push(1);
l1.push(2);
l1.push(3);
l1.push(4);
l1.push(5);