function radixSort(array) {
    let maxDigitCount = mostDigits(array);
    for(let i =0; i<maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let number of array) {
            let digit = getDigit(number,i);
            digitBuckets[digit].push(number);
        }
        array = [];
        array = array.concat(...digitBuckets);
    }
    return array;
}

function getDigit(number, i) {
    return Math.floor((number / Math.pow(10, i)) % 10);
}

function digitCount(number) {
    if(number == 0) return 0;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(array) {
    let maxDigit = 0;
    for(let number of array) maxDigit = Math.max(maxDigit, digitCount(number));
    return maxDigit;
}

console.log(radixSort([300,45,12,500,450]));