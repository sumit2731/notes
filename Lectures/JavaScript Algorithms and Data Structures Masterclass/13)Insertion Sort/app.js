function insertionSort(arr) {
    for(let i = 1; i< arr.length; i++) {
        for(let j = i-1; j>= 0; j--) {
            if(arr[j] < arr[i]) {
                shiftElement(arr,i,j+1);
                break;
            }
            else if(j === 0) shiftElement(arr,i,j);        
        }
    }
    return arr;
}

function shiftElement(arr,removalIndex, additionIndex) {
    if(removalIndex !== additionIndex) {
        let removedArray = arr.splice(removalIndex,1);
        arr.splice(additionIndex,0,removedArray[0]);
    }
}
console.log(insertionSort([170,100,120,40,30]));