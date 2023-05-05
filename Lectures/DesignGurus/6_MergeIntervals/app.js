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
  
  
  class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }
  
  
  class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
      this.interval = interval; // interval representing employee's working hours
      // index of the list containing working hours of this employee
      this.employeeIndex = employeeIndex;
      this.intervalIndex = intervalIndex; // index of the interval in the employee list
    }
  }
  
  function find_employee_free_time(schedule) {
    let n = schedule.length,
      result = [];
    if (schedule === null || n === 0) {
      return result;
    }
    minHeap = new Heap((a, b) => a.interval.start - b.interval.start);
    // insert the first interval of each employee to the queue
    for (i = 0; i < n; i++) {
      minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
    }
    previousInterval = minHeap.peek().interval;
    while (minHeap.length() > 0) {
      const queueTop = minHeap.pop();
      // if previousInterval is not overlapping with the next interval, insert a free 
      // interval
      if (previousInterval.end < queueTop.interval.start) {
        result.push(new Interval(previousInterval.end, queueTop.interval.start));
        previousInterval = queueTop.interval;
      } else { // overlapping intervals, update the previousInterval if needed
        if (previousInterval.end < queueTop.interval.end) {
          previousInterval = queueTop.interval;
        }
      }
      // if there are more intervals available for(the same employee, add their next 
      // interval
      const employeeSchedule = schedule[queueTop.employeeIndex];
      if (employeeSchedule.length > queueTop.intervalIndex + 1) {
        minHeap.push(new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1], queueTop.employeeIndex,
          queueTop.intervalIndex + 1,
        ));
      }
    }
    return result;
  }
  
  
  let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  let result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  