let arr1 = [
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1]
]

let arr2 = [
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0]
]

/**
 * @Desc My Solution - Complexity is bit more than cousre solution
 * CoursseSolution is recoomended
 */

function find_distinct_islands(arr) {
    let isLandObject = {}, visisted = {}, uniqueIslandCount = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[0].length; column++) {
            if (arr[row][column] === 1 && !visisted[`${row}${column}`]) {
                let island = BFS_Transversal(arr, row, column, visisted)
                if (!isLandObject[island.length] || ((isLandObject[island.length] > 0) && isUnique(isLandObject[island.length], island))) {
                    isLandObject[island.length] = (isLandObject[isLandObject.length] || [])
                    isLandObject[island.length].push(island);
                }
            }
        }
    }
    for (let isLandArray in isLandObject) {
        uniqueIslandCount += isLandArray.length
    }
    return uniqueIslandCount;

}

function BFS_Transversal(arr, row, column, visisted) {
    let queue = [[row, column]], resultArray = [];
    while (queue.length) {
        let [currentRow, currentColumn] = queue.shift();
        if (currentRow < 0 || currentColumn < 0 || currentRow >= arr.length || currentColumn >= arr[0].length) continue;
        else if (arr[currentRow][currentColumn] === 1 && !visisted[`${currentRow}${currentColumn}`]) {
            resultArray.push([currentRow, currentColumn]);
            visisted[`${currentRow}${currentColumn}`] = true;
            queue.push([currentRow, currentColumn - 1]);
            queue.push([currentRow, currentColumn + 1]);
            queue.push([currentRow - 1, currentColumn]);
            queue.push([currentRow + 1, currentColumn]);
        }
    }
    return resultArray;
}

function isUnique(islandArray, isLand) {
    for (let currentIsland of islandArray) {
        for (let i = 0; i < island.length - 1; i++) {
            // 1 belongs to row in array
            let [currentRow1, currentColumn1] = currentIsland[i];
            let [nextRow1, nextColumn1] = currentIsland[i + 1]

            let [currentRow2, currentColumn2] = isLand[i];
            let [nextRow2, nextColumn2] = isLand[i + 1]

            if (!((nextRow1 - currentRow1) === (nextRow2 - currentRow2)) && ((nextColumn1 - currentColumn1) === (nextColumn2 - currentColumn2))) {
                return false;
            }

        }
    }
    return true;
}

/**
 * @Exact Course Solution
 */

function find_distinct_islands_DFS(arr) {
    let visited = {}, islandsSet = new Set();
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[0].length; column++) {
            if (arr[row][column] === 1 && !visited[`${row}${column}`]) {
                let traversalStr = traverse_island_DFS(arr, row, column, visited, 'O');
                islandsSet.add(traversalStr);
            }
        }
    }
    for(let island of islandsSet) console.log(island);
    return islandsSet.size;
}

function traverse_island_DFS(arr, row, column, visited, direction) {
    let resultTrStr = '';
    if(row < 0 || column < 0 || row >= arr.length || column >= arr[0].length) return '';
    else if((arr[row][column] ===1) && !visited[`${row}${column}`]) {
        resultTrStr += direction;
        visited[`${row}${column}`] = true;
        resultTrStr += traverse_island_DFS(arr,row, column-1,visited,'L');
        resultTrStr += traverse_island_DFS(arr,row, column+1,visited,'R');
        resultTrStr += traverse_island_DFS(arr,row-1, column,visited,'U');
        resultTrStr += traverse_island_DFS(arr,row+1, column,visited,'D');
    }
    return resultTrStr;
}


console.log(find_distinct_islands_DFS(arr1));
console.log(find_distinct_islands_DFS(arr2));

/**
 * My Solution using BFS and codeAlgo- As efficient as course solution, we get all matrix's which 
 * look same. this more detailed and best one
 */

function find_distinct_islands(arr) {
    let visisted = {}, dStringObj = {};
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[0].length; column++) {
            if (arr[row][column] === 1 && !visisted[`${row}${column}`]) {
                let [island, dString] = BFS_Transversal(arr, row, column, visisted)
                if(!dStringObj[dString]) dStringObj[dString] = []
                dStringObj[dString].push(island);
            }
        }
    }
    console.log(dStringObj);
    return Object.keys(dStringObj).length;
  
  }
  
  function BFS_Transversal(arr, row, column, visisted) {
    let queue = [[row, column,'O']], resultArray = [], dString = '';
    while (queue.length) {
        let [currentRow, currentColumn, direction] = queue.shift();
        if (currentRow < 0 || currentColumn < 0 || currentRow >= arr.length || currentColumn >= arr[0].length) continue;
        else if (arr[currentRow][currentColumn] === 1 && !visisted[`${currentRow}${currentColumn}`]) {
            resultArray.push([currentRow, currentColumn]);
            dString += direction;
            visisted[`${currentRow}${currentColumn}`] = true;
            queue.push([currentRow, currentColumn - 1,'L']);
            queue.push([currentRow, currentColumn + 1,'R']);
            queue.push([currentRow - 1, currentColumn, 'U']);
            queue.push([currentRow + 1, currentColumn, 'D']);
        }
    }
    return [resultArray, dString]
  }