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

/**
 * @MySolution
 */
function reverseElements(lastNodeBeforeReversal, firstNodeToBeReversed, k) {
    let nodeReversalCount = 0, currentNode = firstNodeToBeReversed, prevNode = null, nextNode = null;
    while ((nodeReversalCount < k) && currentNode) {
        nodeReversalCount++;
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    if (lastNodeBeforeReversal) {
        lastNodeBeforeReversal.next = prevNode;
    }
    firstNodeToBeReversed.next = currentNode;
    return { 
        lastReversedNode: firstNodeToBeReversed, 
        nextNode: currentNode, 
        newHead: !lastNodeBeforeReversal ? prevNode : null
    }
}


function reverse_every_k_elements(head, k) {
    let lastReversedNode = null, nextNode = head;
    while (nextNode) {
        ({ lastReversedNode, nextNode,newHead } = reverseElements(lastReversedNode, nextNode, k))
        if(newHead) head = newHead
        
    }
    return head;
}

/**
 * CourseSolution Using 1 function only
 */
function reverse_every_k_elements(head, k) {
    let currentNode = head, previousNode = null,nextNode = null ,iterationCount = 0, linkFromLastList = null;
    while(currentNode) {
        let firstNode = currentNode;
        while(currentNode && iterationCount < k) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
            iterationCount++;
        }
        if(linkFromLastList) {
            linkFromLastList.next = previousNode;
        } else {
            head = previousNode;
        }
        firstNode.next = currentNode;
        linkFromLastList = firstNode;
        iterationCount = 0;
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
result = reverse_every_k_elements(head, 3);
console.log('Nodes of reversed LinkedList are: ');
result.print_list();