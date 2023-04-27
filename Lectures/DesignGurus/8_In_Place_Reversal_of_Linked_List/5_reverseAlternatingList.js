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
  
  function reverse_alternate_k_elements(head, k) {
    let currentNode = head, prevNode = null, nextNode = null, lastNodeOfPrevList = null;
    while (currentNode) {
        //reverse list k chars
        let reverseCount = 0, firstNode = currentNode;
        while(currentNode && (reverseCount < k)) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            reverseCount++;
        }
        //joining head of sublist
        if(lastNodeOfPrevList) {
            lastNodeOfPrevList.next = prevNode;
        } else head = prevNode;
        firstNode.next = currentNode;

        //skip k chars
        let skippingIndex = 0
        while(currentNode && skippingIndex < k) {
            lastNodeOfPrevList = currentNode;
            currentNode = currentNode.next;
            skippingIndex++;
        }
    }
    return head;
  }
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  console.log('Nodes of original LinkedList are: ');
  head.print_list();
  result = reverse_alternate_k_elements(head, 2);
  console.log('Nodes of reversed LinkedList are: ');
  result.print_list();
  