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
 * Course solution_1 - second solution is lot better.
 * n - number of employees
 * m - schedule of each employee
 * k - n*m
 * O(k) + O(k Log k) + k
 */
function find_employee_free_time(schedules) {
  let result = [], allIntervals = [];
  //n
  for (let schedule of schedules) {
    //k
    for (let interval of schedule) {
      allIntervals.push(interval);
    }
  }
  //nk(lognk)
  allIntervals.sort((intA, intB) => (intA.start - intB.start));

  let start = allIntervals[0].start, end = allIntervals[0].end;
  //nk
  for (let i = 1; i < allIntervals.length; i++) {
    let currentInterval = allIntervals[i];
    if (currentInterval.start > end) {
      result.push(new Interval(end, currentInterval.start));
      start = currentInterval.start;
      end = currentInterval.end;
    } else {
      end = Math.max(end, currentInterval.end);
    }
  }
  // TODO: Write your code here
  return result;
}

//my solution better than course solution1

function find_employee_free_time(schedules) {
  let result = [], currentIntervals = [], intervalNo = 0, lastEnd;
  //n
  while(true) {
    //k
    for(let schedule of schedules) {
      if(schedule.length-1 >= intervalNo) {
        currentIntervals.push(schedule[intervalNo]);
      }
    }
    if(currentIntervals.length == 0) break;
    //k logk
    currentIntervals.sort((a,b) => a.start - b.start);
    let start = currentIntervals[0].start, end = currentIntervals[0].end;
    if(lastEnd < start) result.push(new Interval(lastEnd,start));
    //k
    for(let i = 1 ; i < currentIntervals.length; i++) {
      let currentInterval = currentIntervals[i];
      if(currentInterval.start > end) {
        result.push(new Interval(end, currentInterval.start));
        start = currentInterval.start;
        end = currentInterval.end
      }
      else {
        end = Math.max(end,currentInterval.end);
      }
    }
    currentIntervals = [];
    intervalNo++;
    lastEnd = end;
  }
  // TODO: Write your code here
  return result;
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
console.log('Free intervals: ', end = '');
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
console.log('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
