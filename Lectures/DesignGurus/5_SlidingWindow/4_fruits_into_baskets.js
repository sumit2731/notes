function fruits_into_baskets(fruitStr) {
    let windowStart = 0, windowEnd = 0, charDic = {}, maxCount = -Infinity, fruitTypeCount = 0;
    for(windowEnd = 0; windowEnd < fruitStr.length; windowEnd++) {
        let currentChar = fruitStr[windowEnd];
        if(!charDic[currentChar]) {
            fruitTypeCount++;
            charDic[currentChar] = 0    
        }
        charDic[currentChar]++;
        while(fruitTypeCount > 2) {
            let startChar = fruitStr[windowStart];
            charDic[startChar]--;
            if(charDic[startChar] === 0) {
                fruitTypeCount--;
                delete charDic[startChar];
            }
            windowStart++;
        }
        maxCount = Math.max(maxCount, windowEnd-windowStart+1);
        
    }
    return maxCount;
}

console.log(`Maximum number of fruits: `
    + fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));