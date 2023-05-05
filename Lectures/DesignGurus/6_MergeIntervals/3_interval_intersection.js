class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    console.log(`[${this.start}, ${this.end}]`);
  }
}

//my solution - same complexity as course
function merge(intervals_a, intervals_b) {
  let result = [], currentIndex_a = 0, currentIndex_b = 0;
  while ((currentIndex_a < intervals_a.length) && (currentIndex_b < intervals_b.length)) {
    let start_a = intervals_a[currentIndex_a].start, end_a = intervals_a[currentIndex_a].end,
      start_b = intervals_b[currentIndex_b].start, end_b = intervals_b[currentIndex_b].end;
    if ((start_b > end_a) || (start_a > end_b)) {
      if (end_b > end_a) currentIndex_a++;
      else currentIndex_b++
      continue;
    }
    let currentStart = Math.max(start_a, start_b), currentEnd = Math.min(end_a, end_b);
    result.push(new Interval(currentStart, currentEnd));
    if (end_b > end_a) currentIndex_a++;
    else if (end_a > end_b) currentIndex_b++;
    else {
      currentIndex_a++;
      currentIndex_b++;
    }
  }
  // TODO: Write your code here
  return result;
}

//course solution
function merge2(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the 
    // other intervals_b[j]
    a_overlaps_b = intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;

    // check if intervals overlap and intervals_b[j]'s start time lies within the 
    // other intervals_a[i]
    b_overlaps_a = intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].start <= intervals_a[i].end;

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start),
        Math.min(intervals_a[i].end, intervals_b[j].end)));
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

console.log('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

console.log('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
