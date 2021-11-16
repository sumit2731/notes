/* 

Implement LRU Cache
*/

class Node {
    constructor(value) {
       this.value = value;
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
    // when we need to remove a elemnt from cache
    removeTail() {
        let tempTail = this.tail.prev;
        tempTail.next = null;
        this.taul.prev = null;
        this.tail = null;
        this.tail = tempTail;
        this.length--;
    }
    insertAtBegining(node) {
        let tempHead = this.head;
        tempHead.prev = node;
        node.next = tempHead;
        this.head = node;
        this.length++;
    }
    removeNode(node) {
        let lastNode = node.prev;
        let nextNode = node.next;
        if(lastNode) {
            lastNode.next = nextNode;
            node.prev = null;
        }
        if(nextNode) {
            nextNode.prev = lastNode;
            node.next = null;
        }
        this.length--;
    }
}

/* 

1 -> 2 -> 3

{
    abc,
}





*/



class LruCache {
    constructor(size) {
        this.size = size;
        /* 
        {a: 1, b: 2, c:3}
        */
        this.storage = {};
        this.LruList = new DoublyLinkedList();
        this.LRUListPOinter = {};
    }

    add(key, value) {
        if(Object.keys(this.storage).length < this.size) {
            this.storage[key] = value;
            let newNode = new Node(key);
            this.LRUListPOinter[key] = newNode;
            this.LruList.insertAtBegining(node);

        } else {
            //need to remove before inserting
            let lastKey = this.LruList.tail.value;
            this.LruList.removeTail();
            delete this.storage[lastKey];
            delete this.LRUListPOinter[lastKey];
            this.storage[key] = value;
            let newNode = new Node(key);
            this.LRUListPOinter[key] = newNode;
            this.LruList.insertAtBegining(newNode);
        }
    }

    getKey(key) {
        if(key in this.storage) {
            let nodeToBeRemoved = this.LRUListPOinter[key];
            this.LruList.removeNode(nodeToBeRemoved);
            this.insertAtBegining(nodeToBeRemoved);
            return this.storage[key];
        } 
    }
    /* 
    {
        a: 1
        b: 1
        c:1
    }

    {
        a: node
    }

    {value:a} -> b -> c

    [1 -> 2 -> 3 -> 4]
    */
}