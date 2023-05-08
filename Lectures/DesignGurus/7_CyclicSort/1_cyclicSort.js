function cyclicSort(numbers) {
    for(let i = 0; i< numbers.length; i++) {
        while(numbers[i] != i+1) {
            let currentNumber = numbers[i];
            [numbers[i], numbers[currentNumber-1]] = [numbers[currentNumber-1], numbers[i]]
        }
    }
    return numbers; 
    
}

function cyclicSort2(numbers) {
    let currentIndex = 0;
    while(currentIndex < numbers.length) {
        if(numbers[currentIndex] == currentIndex+1) currentIndex++;
        else {
            let correctIndex = numbers[currentIndex] -1;
            [numbers[currentIndex], numbers[correctIndex]] = [numbers[correctIndex], numbers[currentIndex]]
        }
    }
    return numbers; 
    
}
console.log(cyclicSort2([2,6,1,5,4,3]));