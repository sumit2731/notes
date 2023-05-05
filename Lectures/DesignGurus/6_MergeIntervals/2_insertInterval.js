class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      console.log(`[${this.start}, ${this.end}]`);
    }
  }
  
  /**
   * Course Solution
   * O(n)
   */
  // function insert(intervals, new_interval) {
  //   let merged = [], currentIndex = 0;
  //   while((currentIndex < intervals.length) && (new_interval.start > intervals[currentIndex].end)) {
  //     merged.push(intervals[currentIndex]);
  //     currentIndex++;
  //   }
  //   let start = new_interval.start, end = new_interval.end;
  //   while((currentIndex < intervals.length) && (new_interval.end >= intervals[currentIndex].start)) {
  //     start = Math.min(start, intervals[currentIndex].start);
  //     end = Math.max(end, intervals[currentIndex].end);
  //     currentIndex++;
  //   }
  //   merged.push(new Interval(start,end));
  //   while((currentIndex < intervals.length)) {
  //     merged.push(intervals[currentIndex]);
  //     currentIndex++;
  //   }
  //   return merged;
  // }

/**
 * @MySolution
 */
function insert(intervals, new_interval) {
    let merged = [], currentIndex = 0;
    while((intervals[currentIndex].end < new_interval.start)) {
      merged.push(intervals[currentIndex]);
      currentIndex++;
    }
    let start = Math.min(intervals[currentIndex].start, new_interval.start), 
      end = Math.max(intervals[currentIndex].end, new_interval.end);
    currentIndex++;
    while(currentIndex < intervals.length) {
      if(end < intervals[currentIndex].start) {
        merged.push(new Interval(start,end));
        start = intervals[currentIndex].start;
        end = intervals[currentIndex].end;
      }
       else {
        end = Math.max(end, intervals[currentIndex].end);
       }
      currentIndex++;
    }
    merged.push(new Interval(start,end));
    return merged;
  }
  
  
  console.log('Intervals after inserting the new interval: ');
  let result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
  ], new Interval(4, 6));
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  console.log('Intervals after inserting the new interval: ');
  result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
  ], new Interval(4, 10));
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  console.log('Intervals after inserting the new interval: ');
  result = insert([new Interval(2, 3),
    new Interval(5, 7),
  ], new Interval(1, 4));
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  