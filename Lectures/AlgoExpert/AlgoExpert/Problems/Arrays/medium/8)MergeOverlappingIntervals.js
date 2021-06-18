/* 
  Write a function that takes in a non-empty array of arbitrary intervals,
  merges any overlapping intervals, and returns the new intervals in no
  particular order.

   Each interval interval is an array of two integers, with
   interval[0] as the start of the interval and
   interval[1] as the end of the interval.
  
  Note that back-to-back intervals aren't considered to be overlapping. For
  example,[1, 5] and[6, 7] aren't overlapping;
  however,[1, 6] and[6, 7] are indeed
  overlapping.
*/

function mergeOverlappingIntervals(array) {
      /* 
      Sort the intervals with respect to their starting values. This will allow you
      to merge all overlapping intervals in a single traversal through the sorted
      intervals.
      */
      array.sort((arr1, arr2) => arr1[0] - arr2[0] );
      let mergedInterval = [array[0]];
      for(let i = 1; i< array.length ; i++) {
        let lastMergedValue = mergedInterval[mergedInterval.length-1];
        if(lastMergedValue[1] < array[i][0] ) mergedInterval.push(array[i]);
        else {
          //mergedInterval[mergedInterval.length-1] = [Math.min(array[i][0],lastMergedValue[0]),Math.max(array[i][1],lastMergedValue[1])];
          mergedInterval[mergedInterval.length-1][1] = Math.max(array[i][1],lastMergedValue[1])
        }
      }
    return mergedInterval;
}

let intervals = [
    [89, 90],
    [-10, 20],
    [-50, 0],
    [70, 90],
    [90, 91],
    [90, 95]
];
console.log(mergeOverlappingIntervals(intervals));