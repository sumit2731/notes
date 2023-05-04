class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.values = [];
    }
    //O(Log n)
    enqueue(val , priority) {
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        let index = this.values.length - 1, parentNodeIndex = Math.floor((index - 1) / 2);
        while ((index > 0) && (newNode.priority <= this.values[parentNodeIndex].priority)) {
            [this.values[parentNodeIndex], this.values[index]] = [this.values[index], this.values[parentNodeIndex]];
            index = parentNodeIndex;
            if (index > 0) parentNodeIndex = Math.floor((index - 1) / 2);
        }
    }
    //O(Log n)
    dequeue() {
        const min = this.values[0];
        const lastElement = this.values.pop();
        if(this.values.length > 0 ) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(index) {
        index = index || 0;
        let leftChildIndex = 2 * index + 1, rightChildIndex = leftChildIndex + 1;
        while (true) {
            let minChildIndex;
            if (
                (leftChildIndex < this.values.length) && 
                (this.values[leftChildIndex].priority < this.values[index].priority)
            ) {
                minChildIndex = leftChildIndex;
            }
            if (
                (rightChildIndex < this.values.length) && 
                (this.values[rightChildIndex].priority < this.values[index].priority) && 
                (this.values[rightChildIndex].priority < this.values[leftChildIndex].priority)
            ) {
                minChildIndex = rightChildIndex;
            }
            if (!minChildIndex) break;
            [this.values[index], this.values[minChildIndex]] = [this.values[minChildIndex], this.values[index]];
            index = minChildIndex;
            leftChildIndex = 2 * index + 1;
            rightChildIndex = leftChildIndex + 1;
        }
    }
}


let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound",1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
// console.log(ER.values);