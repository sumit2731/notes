/**
 * Given a sorted array of integers and a target average, determine if there is a pair of 
 * values in the array where the average of the pair equals the target average. There may 
 * be more than one pair that matches the average target.
 * 
 * constraints -
 * Time: O(n)
 * Space: O(1)
 */

 function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length -1;
    let tempAverage;
    while(left < right) {
        tempAverage = (arr[left] + arr[right])/2;
        if(tempAverage > avg) {
            right --;
        }
        else if(tempAverage < avg) {
            left ++;
        }
        else if(tempAverage == avg) return [arr[left],arr[right]];
    }
    return false;
 }

 console.log(averagePair([1,2,3],2.5));