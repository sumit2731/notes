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
 * @MySolution - Not Optimized one
 * Timme complexity - n*n
 */
function merge(intervals) {
    const mergedIntervals = [...intervals]
    mergedIntervals.sort((interval1, interval2) => {
        if (interval1.start != interval2.start) return interval1.start - interval2.start;
        else interval1.end - interval2.end
    })
    for (let i = 0; i < mergedIntervals.length - 1; i++) {
        for (let j = i + 1; j < mergedIntervals.length; j++) {
            let combinedInterval = combineInterval(mergedIntervals[i], mergedIntervals[j]);
            if (combinedInterval) {
                mergedIntervals[i] = combinedInterval;
                mergedIntervals.splice(j, 1);
                j--;// i missedTHis check
                continue;
            }

        }
    }
    return mergedIntervals;
}

function combineInterval(interval1, interval2) {

    if ((interval1.start < interval2.start) && (interval1.end > interval2.start) && (interval1.end < interval2.end)) { // case 5
        return new Interval(interval1.start, interval2.end);
    }
    else if ((interval1.start > interval2.start) && (interval2.end < interval1.start) && (interval1.end > interval2.end)) { // case 6
        return new Interval(interval2.start, interval1.end);
    }
    else if (((interval1.start < interval2.start) && (interval1.end < interval2.end)) || ((interval1.start > interval2.start) && (interval1.end > interval2.end))) { // case 1& 2
        return null;
    }
    else if ((interval1.start <= interval2.start) && (interval1.end >= interval2.end)) { // case 3
        return new Interval(interval1.start, interval1.end)
    }
    else if ((interval1.start >= interval2.start) && (interval1.end <= interval2.end)) { // case 4
        return new Interval(interval2.start, interval2.end);
    }

}

/**
 * @CourseSolution - Optimized One
 */

function merge(intervals) {
    intervals.sort((a,b) => a.start - b.start);
    let start = intervals[0].start, end = intervals[0].end, mergedIntervals = [];
    for(let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        if(currentInterval.start <= end) end = Math.max(end, currentInterval.end);
        else {
            mergedIntervals.push(new Interval(start, end));
            start = currentInterval.start;
            end = currentInterval.end;
        }
    }
    mergedIntervals.push(new Interval(start,end));
    return mergedIntervals;
}

//variation of this problem - Given a array of intervals, find out all over-lapping intervals


console.log('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

console.log('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

console.log('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();
