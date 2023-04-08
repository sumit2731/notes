/**
 * @MySolution Using Course Algo
 */

function findCycle(arr) {
    let visitedMatrix = {}
    for(let row = 0; row <arr.length; row++) {
        for(let column = 0; column <arr[0].length; column++) {
            //if(!visitedMatrix[`${row}${column}`] && DFS_Traverse_Recursive(arr, row, column, visitedMatrix, arr[row][column],[-1,-1])) return true;
            if(!visitedMatrix[`${row}${column}`] && BFSTraversal(arr, row, column, visitedMatrix, arr[row][column],[-1,-1])) return true;
        }
    }
    return false;
}

function DFS_Traverse_Recursive(arr, row, column, visistedMatrix, expectedCellValue,parentCell) {
    let foundCycle = false;
    if((arr[row][column] === expectedCellValue) && visistedMatrix[`${row}${column}`]) return true;
    else if(arr[row][column] === expectedCellValue) {
        visistedMatrix[`${row}${column}`] = true;
        if(isValidCell(arr,row, column-1,parentCell, expectedCellValue)) foundCycle |= DFS_Traverse_Recursive(arr, row, column-1,visistedMatrix,expectedCellValue,[row, column]);
        if(foundCycle) return true;
        if(isValidCell(arr,row, column+1,parentCell, expectedCellValue)) foundCycle |= DFS_Traverse_Recursive(arr, row, column+1, visistedMatrix,expectedCellValue,[row,column]);
        if(foundCycle) return true;
        if(isValidCell(arr,row-1, column,parentCell, expectedCellValue)) foundCycle |= DFS_Traverse_Recursive(arr, row-1, column, visistedMatrix,expectedCellValue,[row,column]);
        if(foundCycle) return true;
        if(isValidCell(arr,row+1, column,parentCell, expectedCellValue)) foundCycle |= DFS_Traverse_Recursive(arr, row+1, column, visistedMatrix,expectedCellValue,[row,column]);
        if(foundCycle) return true;
    }
    return foundCycle;
}

function isValidCell(arr,row, column, parentCell, expectedCellValue) {
    if(row < 0 || column < 0 || row >= arr.length || column >= arr[0].length) return false;
    else if(arr[row][column] !== expectedCellValue) return false;
    else {
        if(!Array.isArray(parentCell)) return true;
        let [currentParentRow, parentColumn] = parentCell;
        if(currentParentRow === row && parentColumn === column) return false;
        else return true
    }
}

let arr1 = [
    ['a', 'a', 'a', 'a'],
    ['b', 'a', 'c', 'a'],
    ['b', 'a', 'c', 'a'],
    ['b', 'a', 'a', 'a']
];

let arr2 = [
    ['a', 'a', 'a', 'a'],
    ['a', 'b', 'b', 'a'],
    ['a', 'b', 'a', 'a'],
    ['a', 'a', 'a', 'c']
]

let arr3 = [
    ['a', 'b', 'e', 'b'],
    ['b', 'b', 'b', 'b'],
    ['b', 'c', 'c', 'd'],
    ['c', 'c', 'd', 'd']
]

console.log(findCycle(arr1));
console.log(findCycle(arr2));
console.log(findCycle(arr3));

/* 
See course solution - same algo but more elegent
*/

/* 
My solution using BFSIterative
*/

function BFSTraversal(arr, row, column,visitedMatrix,expectedCellValue,parentCell) {
    let queue = [[row, column,parentCell]];
    while(queue.length) {
        let [currentRow, currentColumn,currentParentCell] = queue.shift();
        if(currentRow < 0 || currentColumn < 0 || currentRow >= arr.length ||currentColumn >= arr[0].length) {
            continue;
        }
        if(!arr[currentRow]) {
            debugger;
        }
        else if(arr[currentRow][currentColumn] !== expectedCellValue) {
            continue;
        }
        else if((arr[currentRow][currentColumn] === expectedCellValue) && visitedMatrix[`${currentRow}${currentColumn}`]) {
            return true;
        }
        else if((arr[currentRow][currentColumn] === expectedCellValue) && !visitedMatrix[`${currentRow}${currentColumn}`]) {
            visitedMatrix[`${currentRow}${currentColumn}`] = true;
            let [currentParentRow, currentParentColumn] = currentParentCell;
            if(!((currentColumn-1 === currentParentColumn) && (currentRow === currentParentRow))) {
                queue.push([currentRow, currentColumn-1,[currentRow, currentColumn]]);
            }
            if(!((currentColumn+1 === currentParentColumn) && (currentRow === currentParentRow) )) {
                queue.push([currentRow, currentColumn+1,[currentRow, currentColumn]]);
            }
            if(!((currentRow-1 === currentParentRow) && (currentColumn === currentParentColumn))) {
                queue.push([currentRow-1, currentColumn,[currentRow, currentColumn]]);
            }
            if(!((currentRow+1 === currentParentRow) && (currentColumn ===currentParentColumn))) {
                queue.push([currentRow+1, currentColumn,[currentRow, currentColumn]]);
            }
        }
    }
    return false;
}