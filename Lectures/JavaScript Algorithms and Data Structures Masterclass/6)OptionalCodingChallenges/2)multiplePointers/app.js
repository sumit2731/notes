function squaredArray(array) {
    let negativeNumbersPresent = array[0] < 0;
    if(!negativeNumbersPresent) return array.map(num => num * num);
    else {
        let sortedSquaredArray = [];
        let lastNegativeIndex = 1, newSortedArray = [];
        
        while(lastNegativeIndex < array.length-1) {
            if(array[lastNegativeIndex +1] >= 0) break;
            lastNegativeIndex++;
        }
        
        let currentIndex = lastNegativeIndex+1;
        
        while((lastNegativeIndex >= 0) && (currentIndex < array.length)) {
            
            if(Math.abs(array[lastNegativeIndex]) > array[currentIndex]) {
                sortedSquaredArray.push(array[currentIndex] * array[currentIndex]);
                currentIndex++;
            } else {
                sortedSquaredArray.push(array[lastNegativeIndex] * array[lastNegativeIndex]);
                lastNegativeIndex--;
            }
        }

        if(lastNegativeIndex === 0) {
            while(currentIndex < array.length) {
                sortedSquaredArray.push(array[currentIndex] * array[currentIndex]);
                currentIndex++;
            }
        }
        else {
            while(lastNegativeIndex >= 0) {
                sortedSquaredArray.push(array[lastNegativeIndex] * array[lastNegativeIndex]);
                lastNegativeIndex--;
            }
        }
        return sortedSquaredArray;

    }  
}

let arr = [-9,-5,-4,1,2,13];
console.log(arr)
//let arr = [1,2,3,4,5];
console.log(squaredArray(arr));