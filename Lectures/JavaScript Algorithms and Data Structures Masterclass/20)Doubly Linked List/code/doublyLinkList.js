class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    node.prev = this.tail;
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    let removedNode = this.tail;
    if (this.length == 0) return undefined;
    else if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      // we need to remove prev pointer of tail also
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    let removedElement = this.head;
    if (!this.head) return undefined;
    else if (this.length == 1) this.head = this.tail = null;
    else {
      this.head = this.head.next;
      this.head.prev = null;
      removedElement.next = null;
    }
    this.length--;
    return removedElement;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length == 0) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * This is my solution. It's better than one shown in course
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let condition = index < this.length / 2;
    let node = condition ? this.head : this.tail;
    let property = condition ? "next" : "prev";
    index = condition ? index : this.length - 1 - index;
    let counter = 0;
    while (counter < index) {
      node = node[property];
      counter++;
    }
    return node;
  }

  /*
   *Course solution of get
   */

/*   get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  } */

  set(index,value) {
      let node = this.get(index);
      if (node) {
          node.val = value;
          return true;
      }
      return false;
  }

  insert(index, value) {
      if (index < 0 || index > this.length) return undefined;
      if(index == 0) return !!this.unshift(value);
      else if(index == this.length) return !! this.push(value);
      else {
          let newNode = new Node(value);
          let seconLastNode = this.get(index-1);
          newNode.prev = seconLastNode;
          newNode.next = seconLastNode.next;
          seconLastNode.next.prev = newNode;
          seconLastNode.next = newNode;
      }
      this.length++;
      return true;
  }

  /**
   * Here make sure that you remove next and prev link from returned node
   * otherwise user can transverse into our list using those links
   */
  remove(index) {
      if(index < 0 || index >= this.length) return undefined;
      else if(index == 0) return this.shift();
      else if(index == this.length -1) return this.pop();
      else {
          let removedNode = this.get(index);
          removedNode.prev.next = removedNode.next;
          removedNode.next.prev = removedNode.prev;
          removedNode.next = null;
          removedNode.prev = null
          return removedNode;
      }  
  }
  print() {
    let node = this.head;
    while(node) {
      console.log(node);
      node = node.next;
    }
  }
}
let list1 = new DoublyLinkedList();
list1.push(0);
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);
list1.push(7);
list1.push(8);
list1.push(9);
list1.remove(4);
console.log(list1.get(2));
console.log(list1.get(3));
console.log(list1.get(4));
console.log(list1);