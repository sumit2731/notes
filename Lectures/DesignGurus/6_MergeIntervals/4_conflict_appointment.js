class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }
  /**
   * this is course as well as my solution. but if we need to find the conflicting intervals also
   * then see minMeetingRoom problem
   */
  function can_attend_all_appointments(intervals) {
    intervals.sort((a,b) => a.start-b.start);
    let currentPointer = 1;
    while(currentPointer < intervals.length) {
        if(intervals[currentPointer].start >= intervals[currentPointer-1].end) currentPointer++;
        else return false;
    }
    return true;
  }
  
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`);
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`);
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`);
  