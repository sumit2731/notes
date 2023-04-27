class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      console.log(`${temp.value} `);
      temp = temp.next;
    }
  }
}


function reverse(head) {
  let prevNode = null, currentNode = head;
  while(currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode
}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);


head.print_list();
let result = reverse(head);
// process.stdout.write('Nodes of reversed LinkedList are: ');
console.log("Printing Linked List In reverse Order");
result.print_list();
