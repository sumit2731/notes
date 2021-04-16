function maxSumArray(arr, n) {
    if(n > arr.length) return undefined;
    let tempSum = 0;
    for(let i = 0; i< n; i++) tempSum += arr[i];
    for(i = 0;i <= arr.length-1-n ;i++) if(temSum < tempSum + arr[n+i] - arr[i]) tempSum = tempSum + arr[n+i] - arr[i];
    return tempSum;
}
  
