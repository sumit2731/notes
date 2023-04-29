class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        console.log(`[${this.start}, ${this.end}]`);
    }
}


function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    // sort the intervals on the start time
    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];
    let start = intervals[0].start,
        end = intervals[0].end;
    for (i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval.start <= end) { // overlapping intervals, adjust the 'end'
            end = Math.max(interval.end, end);
        } else { // non-overlapping interval, add the previous interval and reset
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    // add the last interval
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}


console.log('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

// console.log('Merged intervals: ');
// result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
// for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
// }
// console.log();

// console.log('Merged intervals: ');
// result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
// }
// console.log();
