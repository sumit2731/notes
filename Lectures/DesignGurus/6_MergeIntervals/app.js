class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.items = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.items.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.items.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.items[this.getParentIndex(index)];
  }

  length() {
    return this.items.length;
  }
  
  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  peek() {
    return this.items[0];
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown();
    return item;
  }

  push(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.items[index] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown(index);
    return true;
  }

  heapifyUp(index) {
    let currentIndex = index || this.items.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.compareFn(this.items[currentIndex], this.parent(currentIndex)) < 0
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    // Start at the index passed in or the root if not provided
    let currentIndex = index || 0;
    // While the current index has a left child
    while (this.hasLeftChild(currentIndex)) {
      // Find the smaller child index between the left and right children
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.compareFn(this.rightChild(currentIndex), this.leftChild(currentIndex)) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      // If the current item is smaller than the smaller child, we're done
      if (this.compareFn(this.items[currentIndex], this.items[smallerChildIndex]) < 0) {
        break;
      }
      // Otherwise, swap the current item with the smaller child and continue
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}


class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap((a, b) => a.end - b.end);
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended

    while (minHeap.length() > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
      //console.log('in while');
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length());
  }
  return minRooms;
}


console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
