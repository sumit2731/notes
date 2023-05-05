class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      console.log(`[${this.start}, ${this.end}]`);
    }
  }
  
  
  function find_employee_free_time(schedule) {
    let result = [];
    schedule.sort((sch1, sch2) => sch1.end -sch2.end);
    let start = schedule[0].start, end = schedule[0].end;
    for(let i = s1; i < schedule.length; i++) {
        let currentSchedule = schedule[i];
        if(currentSchedule.start > end) {
            result.push(new Interval(end, currentSchedule.start));
        }
        else {
            end = Math.max(end,currentSchedule.end);
        } 
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
  
//   input = [
//     [new Interval(1, 3), new Interval(9, 12)],
//     [new Interval(2, 4)],
//     [new Interval(6, 8)],
//   ];
//   console.log('Free intervals: ', end = '');
//   result = find_employee_free_time(input);
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log();
  
//   input = [
//     [new Interval(1, 3)],
//     [new Interval(2, 4)],
//     [new Interval(3, 5), new Interval(7, 9)],
//   ];
//   console.log('Free intervals: ', end = '');
//   result = find_employee_free_time(input);
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log();
  