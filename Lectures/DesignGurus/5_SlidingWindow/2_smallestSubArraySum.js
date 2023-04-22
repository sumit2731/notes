function smallest_subArraySum(arr, requiredSum) {
    let windowStart = 0, currentSum = 0, minLength = Infinity;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd];
        while(currentSum >= requiredSum) {
            minLength = Math.min(minLength, windowEnd-windowStart+1);
            if(minLength === 1) return 1;
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }
    return (minLength === Infinity) ? 0 : minLength
}


console.log(smallest_subArraySum(7, [2, 1, 5, 2, 3, 2]));