class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /* 
    *This is push for linked list
    */
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.last) this.first  = newNode;
        else this.last.next = newNode;
        this.last = newNode;
        return ++this.size;
    }

    /* 
    *This is shift for linked list
    */
    dequeue() {
        if(!this.first) return null;
        let removedNode = this.start;
        this.start = removedNode.next;
        if(this.size == 1) this.last = this.start;
        this.size--;
        return removedNode.value;

    }
}