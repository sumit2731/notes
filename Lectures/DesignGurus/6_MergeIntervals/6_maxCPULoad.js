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
            if((rightChildIndex < this.values.length) && !(this.compareFn(this.values[index], this.values[rightChildIndex])) && !(this.compareFn(this.values[leftChildIndex], this.values[rightChildIndex]))) {
                swapIndex = rightChildIndex;
            }
            if(!swapIndex) break;
            [this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];
            index = swapIndex;
            leftChildIndex = 2*(index)+1;
            rightChildIndex = leftChildIndex+1;
        }

    }

    peak() {
        return this.values[0];
    }
}



class Job {
    constructor(start, end, cpuLoad) {
        this.start = start;
        this.end = end;
        this.cpuLoad = cpuLoad;
    }
}

function find_max_cpu_load(jobs) {
    let maxCPULoad = 0, inProgressJobsHeap = new Heap((jobA, jobB) => (jobA.end < jobB.end)) // a is parent
    jobs = jobs.sort((jobA, jobB) => jobA.start - jobB.start), currentLoad = 0;
    // TODO: Write your code here
    for(let currentJob of jobs) {
        while((inProgressJobsHeap.values.length > 0) && currentJob.start >= inProgressJobsHeap.peak().end) {
            let endedJob = inProgressJobsHeap.extractRoot();
            currentLoad -= endedJob.cpuLoad;
        }
        inProgressJobsHeap.push(currentJob);
        currentLoad += currentJob.cpuLoad;
        maxCPULoad = Math.max(maxCPULoad, currentLoad);
    }
    return maxCPULoad;
}


console.log(`Maximum CPU load at any time: ` +
    `${find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`);
console.log(`Maximum CPU load at any time: ` +
    `${find_max_cpu_load([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`);
console.log(`Maximum CPU load at any time: ` +
    `${find_max_cpu_load([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`);
