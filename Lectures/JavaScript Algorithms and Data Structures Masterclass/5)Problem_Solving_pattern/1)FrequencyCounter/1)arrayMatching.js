/**
 * we have 2 arrays , you need to check that second array has square of elements of first array and frequency is same
 * [4, 5],[25,16] => true
 * [4,4,5][25,16,16] => true
 * [4,4,25,[25,16,25]] => true
 */




/* 
* Naive Solution 
  Complexity - O(n*n)
*/

function compare1(arr1, arr2) {
    for(let val of arr1) {
        let matchingIndex = arr2.findIndex(val2 => val2 == val*val);
        if (matchingIndex > -1) arr2.splice(matchingIndex,1);
         else {
            return false;
        }
    }
    return true;
}
//console.log(compare1([1,2,1],[1,1,4]));

/* 
*Better Solution(Uisng RefrencyConter)
 Complexity - O(3n) = O(n)
 // thre is a better solution which ill prevent third loop. see analgram problem
*/

function compare2 (arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1; 
    }
    
    for(value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1; 
    }

    for(let property in frequencyCounter1) {
        if (2*property in frequencyCounter2) {
            if (frequencyCounter1[property] == frequencyCounter2[2* property]) {}
            else return false;
        }
        else return false;
    }
    return true;   
}

console.log(compare2([2,5,8],[16,10,4]));