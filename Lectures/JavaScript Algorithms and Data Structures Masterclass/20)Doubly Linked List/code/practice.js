class Node {
    constructor(value,next,previous) {
        this.value = value;
        this.next = next;
        this.prev = previous;
    }
}

class DoublyLinkedList{
    constructor(head,tail, value) {
        this.head = head;
        this.tail = tail;
        this.value = value;
        this.length = 0;
    }

    /**
     * Inset value at last
     * O - O(1)
     */
    push(value) {
        let node = new Node(value);
        node.prev = this.tail;
        if(this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        this.length++;
        return this;
    }

    /**
     * removes a vale form last
     */
    pop() {
        let removedNode = this.tail;
        if(this.length === 0) return null;
        else if(this.length === 1) this.head = this.tail = null;
        else {
            let secondLastNode = this.tail.prev;
            secondLastNode.next = null;
            this.tail = secondLastNode;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }


    shift() {
        if(this.length == 0) return undefined; 
        let firstNode = this.head;
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        else this.tail = null;
        firstNode.next = null;
        this.length--;
        return firstNode;
    }

    unshift(value) {
        let node = new Node(value);
        if(this.length === 0) this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let node;
        if(index < this.length/2) {
            node = this.head;
            for(let i = 0; i< index; i++) node = node.next
        }
        else {
            node = this.tail;
            for(let i = this.length-1; i > index; i--) {
                node = node.prev;
            }
        }
        return node;
    }

    set(index, value) {
        let node = this.get(index);
        if(node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return undefined;
        else if(index === 0) this.unshift(value);
        else if(index === this.length) this.unshift(value);
        else {
            let newNode = new Node(value);
            let lastNode = this.get(index-1);
            let nextNode = lastNode.next;
            lastNode.next = newNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            newNode.prev =lastNode;
        }
        this.length++;
        return true;
        

    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            let node = this.get(index);
            let prevNode = node.prev;
            let nextNode = node.next;

            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            node.next = null;
            node.prev = null;
            return node;
        }
    }

    reverse() {
        let prevNode = null;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        while(node) {
            let nextNode = node.next;
            node.next = prevNode;
            node.prev = nextNode;
            prevNode = node;
            node = nextNode;
        }
    }

    show() {
        let node = this.head;
        while(node) {
            console.log(node.value);
            node = node.next;
        } 
    }

}

let dl = new DoublyLinkedList();

dl.push(0);
dl.push(1);
dl.push(2);
dl.push(3);
dl.push(4);
dl.push(5);
dl.push(6);


dl.show();
let removedNode = dl.remove(4)
dl.show();