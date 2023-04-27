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
  
  
function reverse_sub_list(head,p, q) {
    let lastNodeBeforeReversal = null, firstReversedNode = null, lastReversedNode = null, firstNodeAfterReversal = null,
    prevNode = null, nextNode = null,currentNode = null, currentNodePointer = 0;
    //reaching last node of unreversed list
    while(currentNodePointer < p) {
        currentNode = currentNode?.next || head;
        currentNodePointer++;
        if(currentNodePointer ==  p-1) lastNodeBeforeReversal = currentNode;
        firstReversedNode = currentNode;
    }
    //reversing the nodes between p and q
    while(currentNodePointer <= q) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      currentNodePointer++;
    }
    //connecting the missing parts
    lastReversedNode = prevNode;
    firstNodeAfterReversal = currentNode;
    if(lastNodeBeforeReversal) lastNodeBeforeReversal.next = lastReversedNode;
    firstReversedNode.next = firstNodeAfterReversal;
    if(p == 1) head = lastReversedNode;
    return head;
}
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  console.log('Nodes of original LinkedList are: ');
  head.print_list();
  result = reverse_sub_list(head, 2, 2);
  console.log('Nodes of reversed LinkedList are: ');
  result.print_list();
  