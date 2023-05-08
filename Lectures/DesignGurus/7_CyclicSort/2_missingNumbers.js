// in O(n)
function find_missing_number(nums) {
    let arraySum = nums.reduce((accum, num) => accum+ num, 0),  n = nums.length,numberSum = (n * (n + 1)) / 2;
    return numberSum - arraySum;
}

// in O(n) + O(n)
function find_missing_number2(nums) {
    let sortedArray = Array.from({length: nums.length+1});
    for(let num of nums) sortedArray[num] = num;
    for(let i = 0 ; i < sortedArray.length; i++) {
        if((sortedArray[i] != 0) && !sortedArray[i]) return i;
    }
}

//in O(n) without using extras array

function find_missing_number3(numbers) {
    let lastNumberIndex = -1, currentIndex = 0;
    while(currentIndex < numbers.length) {
        //given index has correct number
        if(numbers[currentIndex] == currentIndex) currentIndex++;
        //given index has n number, so skip it
        else if (numbers[currentIndex] == numbers.length) {
            lastNumberIndex = currentIndex;
            currentIndex++;
        }
        //given index has wrong number, so swap
        else {
            let correctIndex = numbers[currentIndex];
            [numbers[currentIndex], numbers[correctIndex]] = [numbers[correctIndex], numbers[currentIndex]]
        }
    }
    if(lastNumberIndex == -1) return numbers.length;
    else return lastNumberIndex;
}


console.log(find_missing_number2([4, 0, 3, 1]));
console.log(find_missing_number2([8, 3, 5, 2, 4, 6, 0, 1]));