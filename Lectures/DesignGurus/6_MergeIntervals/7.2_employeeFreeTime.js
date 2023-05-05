class Node {
    constructor(value, source) {
        this.value = value;
        this.sourceIndex = sourceIndex;
    }
}

class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.values = [];
    }
    push(job) {
        this.values.push(job);
        let currentIndex = this.values.length-1, parentIndex = Math.floor((currentIndex-1)/2);
        while((currentIndex > 0) && !(this.compareFn(this.values[parentIndex],this.values[currentIndex]))) {
            [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2);
        }
    }
    extractRoot() {
        const firstElement = this.values[0], lastElement = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return firstElement;
    }

    sinkDown(index) {
        index = index || 0;
        let leftChildIndex = 2*(index)+1, rightChildIndex = leftChildIndex+1;
        while(leftChildIndex < this.values.length) {
            let swapIndex;
            if(!(this.compareFn(this.values[index], this.values[leftChildIndex]))) swapIndex = leftChildIndex;
            if((rightChildIndex < this.values.length) && !(this.compareFn(this.values[index], this.values[rightChildIndex])) && (this.compareFn(this.values[rightChildIndex], this.values[leftChildIndex]))) {
                swapIndex = rightChildIndex;
            }
            if(!swapIndex) break;
            [this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];
            index = swapIndex;
            leftChildIndex = 2*(index) +1;
            rightChildIndex = leftChildIndex+1;
        }

    }

    peak() {
        return this.values[0];
    }
}

class Interval {
    constructor(start,end) {
        this.start = start;
        this.end = end;
    }
    print_interval() {
        console.log(`[${this.start}, ${this.end}]`);
      }
}

class EmployeeInterval {
    constructor(interval, employeeIndex, scheduleIndex) {
        this.interval = interval;
        this.employeeIndex = employeeIndex;
        this.scheduleIndex = scheduleIndex;
    }
}


/**
 * n - Total number of intervals
 * k - total number of employess 
 * 
 *O( n * Log(k) )
 */
function find_employee_free_time (schedules) { 
    let scheduleHeap = new Heap((parentJob, childJob) => (parentJob.interval.start < childJob.interval.start)); // parent, child
    let freeTime = [];
    for(let i = 0; i< schedules.length; i++) {
        let employeeIntervalNode = new EmployeeInterval(schedules[i][0], i, 0);
        scheduleHeap.push(employeeIntervalNode);
    }
    let start = scheduleHeap.values[0].interval.start, end = scheduleHeap.values[0].interval.end;
    while(scheduleHeap.values.length > 0) {
        let nextInterval = scheduleHeap.extractRoot();
        if(nextInterval.interval.start > end) {
            freeTime.push(new Interval(end, nextInterval.interval.start));
            start = nextInterval.interval.start;
            end = nextInterval.interval.end;
        }
        else end = Math.max(end, nextInterval.interval.end);
        //check if current employee has more schdules
        if(schedules[nextInterval.employeeIndex].length > nextInterval.scheduleIndex+1) {
            let nextScheduleOfSameEmployee = schedules[nextInterval.employeeIndex][nextInterval.scheduleIndex+1]
            scheduleHeap.push(new EmployeeInterval(nextScheduleOfSameEmployee,nextInterval.employeeIndex,nextInterval.scheduleIndex+1));
        }
    }
    return freeTime;
}

let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
  ];
  console.log('Free intervals: ', end = '');
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