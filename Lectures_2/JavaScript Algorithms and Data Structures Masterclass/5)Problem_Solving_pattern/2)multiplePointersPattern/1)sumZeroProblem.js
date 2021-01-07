/**
 * Input is sorted array, we need to find first pair , whose sum is 0 
 * returned array that contains that 2 values. if there is no such pair,
 * return undefined
 */

 /**
  * Naive Approach 1
  * Time Complexity - O(n*n)
  * Space Complexity - O(1)
  */
 function sumZero(array) {
    for(let value of array) {
        let negativeValue = array.find(val => val = -value);
        if(negativeValue) return [value, negativeValue]
        return undefined
    }
 }

 /**
  * Naive Approach 2(Shown in Tutorial),better than approach 1, because second loop is starting from i
  * Time Complexity - O(n*n)
  * Space Complexity - O(1)
  */
 function sumZero2(array) {
    for(let i = 0; i< array.length; i++) {
        for(let j = i; j< array.length; j++) {
            if( array[i] + array[j] == 0) return [array[i], array[j]];
        }
    }
    return undefined;
 }



//console.log(sumZero([-3,-1,0,2,3]));


/**
* My solution using @MultiplePoiters Approach 1
*/

function sumZero3(array) {
    let j = array.length - 1;
    let initialSum;
    let sum;
    for(let i =0; i< array.length-1; i++) {
        initialSum = array[i] + array[j];
        while(true) {
            sum = array[i] + array[j];
            if(i == j) {
                if(j+2 >= array.length)j = j+2;
                break;
            }
            if (sum == 0) return [array[i], array[j]];
            if( sum > 0) {
                if(initialSum < 0 || j <=0 ) break;
                j -= 1;
            } else {
                if (j == array.length - 1 || initialSum > 0) break;
                else j += 1;
            }
            initialSum = sum;
        }
    }
    return undefined;
}

console.log(sumZero3([-3,100,200,300,400]));

/**
 * MultiPointers Apprach 2(as Shown in Course )
 * TimeComplexity - O(n)
 * Space Complexity - O(1)
 * Here we have 2 pointers that are on each end and move toards each other
 */

 function sumZero4(arr) {
     let left = 0;
     let right = arr.length -1;
     while(left < right) {
         let sum = arr[left] + arr[right];
         if(sum == 0) return [arr[left], arr[right]];
         else if(sum > 0) right --;
         else left++
     }
 }
 //console.log(sumZero4([-100, -5, -3, 3, 7, 11]));
