/**
 * My Solution_1, Just returns true or false
 */
function binarySearch(array, number) {
    let length = array.length;
    let middle = length/2;
    if (length == 1) {
        if (array[0] == number) return array[0];
        else return false;
    }
     else {
        if (array[middle] > number) {
            return binarySearch(array.slice(0, middle), number);
        }
        else if (array[middle] < number) {
            return binarySearch(array.slice(middle+1), number);
        }
        else return true;
    }
}    

//console.log(binarySearch([10,20,30,40,50,60,70,80],50));

/**
 * My Solution_2, based on Psedo code shown in course, also returns the number
 */

 function binarySearch2(array, number) {
     let start = 0;
     let end = array.length-1;
     let middle;
     while (start <= end) {
        //if (start == end) return array[start] == number ? start : -1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] == number) return middle;
        else if (array[middle] > number) end = middle -1;
        else start = middle +1
     }
     return -1;
     
 }

 console.log(binarySearch2([10,20,30,40,50,60],65));



 /**
  * Tutorial Solution
  */

function binarySearch3(array,elem) {
    let start = 0;
    let end = array.length -1;
    let middle = Math.floor((start+end)/2);
    while (array[middle] !== elem && start <= end) {
        if (elem < array[middle]) end = middle -1;
        else start = middle +1;
        middle = Math.floor((start+end)/2);
    }
    return (array[middle] == elem) ? middle -1;
}

console.log(binarySearch3([10, 20, 30, 40, 50, 60], 35));