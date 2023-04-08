class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }



function has_cycle(node) {
    let ptr1 = head, ptr2 = head;
    while(true) {
        ptr1 = ptr1.next;
        if(ptr2.next)ptr2 = ptr2.next.next;
        else return false
        if(ptr1 === ptr2) return true;
        else if (!ptr1 || !ptr2) return false;
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);