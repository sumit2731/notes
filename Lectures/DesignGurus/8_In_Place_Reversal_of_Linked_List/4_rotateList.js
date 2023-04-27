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
      console.log();
    }
  }
  
  function rotate(head, rotations) {
    if (!head) return head;
    let currentNode = head, length = 0, endOfSecondList = null, lastNode = null;
    //getting length and lastNode of linked list
    while(currentNode) {
        length++;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    rotation = rotations % length;
    endOfSecondList = length - rotations;
    currentNode = head;
    let shiftingIndex = 1;
    while (shiftingIndex < endOfSecondList) {
        shiftingIndex++
        currentNode = currentNode.next
    }
    let tempHead = currentNode.next;
    //settig new tail
    currentNode.next = null;
    //conneecting 2 list
    lastNode.next = head;
    //new head
    head = tempHead;
    return head;
  }
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  
  console.log('Nodes of original LinkedList are: ');
  head.print_list();
  result = rotate(head, 3);
  console.log('Nodes of reversed LinkedList are: ');
  result.print_list();
  