//node - this are all my solution, for course solution, look at udemy course.
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    //O(Log n)
    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1, parentNodeIndex = Math.floor((index - 1) / 2);
        while ((index > 0) && (value > this.values[parentNodeIndex])) {
            [this.values[parentNodeIndex], this.values[index]] = [this.values[index], this.values[parentNodeIndex]];
            index = parentNodeIndex;
            if (index > 0) parentNodeIndex = Math.floor((index - 1) / 2);
        }
    }
    //O(Log n)
    extractMax() {
        const max = this.values[0];
        const lastElement = this.values.pop();
        if(this.values.length > 0 ) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(index) {
        index = index || 0;
        let leftChildIndex = 2 * index + 1, rightChildIndex = leftChildIndex + 1;
        while (true) {
            let maxChildIndex;
            if (
                (leftChildIndex < this.values.length) && 
                (this.values[leftChildIndex] >= this.values[index])
            ) {
                maxChildIndex = leftChildIndex;
            }
            if (
                (rightChildIndex < this.values.length) && 
                (this.values[rightChildIndex] >= this.values[index]) && 
                (this.values[rightChildIndex] >= this.values[leftChildIndex])
            ) {
                maxChildIndex = rightChildIndex;
            }
            if (!maxChildIndex) break;
            [this.values[index], this.values[maxChildIndex]] = [this.values[maxChildIndex], this.values[index]];
            index = maxChildIndex;
            leftChildIndex = 2 * index + 1;
            rightChildIndex = leftChildIndex + 1;
        }
    }
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());

console.log(heap.values);
console.log(heap.extractMax());
