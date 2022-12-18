/**
 * 
  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.

  
  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.
 */

//my solution -- see courseSolution it more simpleOne
function spiralTraverse(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let spiralRounds = Math.ceil(Math.min(rows,columns)/2);
    let returnArr = [];
    for(let spiralRound = 0; spiralRound<spiralRounds; spiralRound++) {
        let firstRow = spiralRound, lastRow = rows-1-spiralRound, firstColumn = spiralRound , lastColumn = columns-1-spiralRound;
        //firstRow, also middle elemnt comes here
        for(let col = firstColumn; col <= lastColumn; col++) returnArr.push(arr[firstRow][col]);
        
        //lastColumn
        for(let row = firstRow+1; row <=lastRow ;row++) returnArr.push(arr[row][lastColumn]);
        
        //lastRow
        for(let column=lastColumn-1; (column >= firstColumn) && (firstRow !== lastRow)  ; column--) returnArr.push(arr[lastRow][column]);
            
        //firstColumn
        for(let row = lastRow-1; (row >=firstRow+1) && (firstColumn !== lastColumn) ; row--) returnArr.push(arr[row][firstColumn])
        
    }
    return returnArr;
}

//courseSolution - This is simpler
function spiralTraverse2(arr) {
	let startRow = 0, startCol = 0, endRow = arr.length-1 , endCol = arr[0].length-1;
	let resultArr = [];
	while(startRow <= endRow && startCol <= endCol) {
		//startRow
		for(let col = startCol; col <= endCol; col++) resultArr.push(arr[startRow][col]);
		
		//endCol
		for(let row = startRow+1; row <= endRow; row++) resultArr.push(arr[row][endCol]);
		
		//endRow
		for(let col = endCol-1; (col >=startCol) && (startRow !== endRow) ; col--) resultArr.push(arr[endRow][col]);
		
		//startCol
		for(let row = endRow-1 ; (row >= startRow+1) && (startCol !== endCol); row--) resultArr.push(arr[row][startCol]);
		
		startRow++;
		endRow--;
		startCol++;
		endCol--;

	}
	return resultArr;
}



//7 * 7
// let arr1 = 
//     [
//         [0,  1,  2,  3,  4,  5,  6],
//         [23, 24, 25, 26, 27, 28, 7],
//         [22, 39, 40, 41, 42, 29, 8],
//         [21, 38, 47, 48, 43, 30, 9],
//         [20, 37, 46, 45, 44, 31, 10],
//         [19, 36, 35, 34, 33, 32, 11],
//         [18, 17, 16, 15, 14, 13, 12]

//     ];
// 8 * 4
// let arr1 = 
//     [
//         [0,  1,  2,  3],
//         [19, 20, 21, 4],
//         [18, 31, 22, 5],
//         [17, 30, 23, 6],
//         [16, 29, 24, 7],
//         [15, 28, 25, 8],
//         [14, 27, 26, 9],
//         [13, 12, 11, 10]

//     ];
//spiralTraverse(arr1);

// 4 * 5
// let arr1 = 
//     [
//         [1,2,3,4,5],
//         [6,7,8,9,10],
//         [11,12,13,14,15],
//         [16,17,18,19,20]
//     ]

//3*4

// let arr1 = 
//     [
//         [1,2,3,4],
//         [6,7,8,9],
//         [11,12,13,14]
//     ]

//3 *3

// let arr1 = 
//     [
//         [1,2,3],
//         [1,2,3],
//         [1,2,3]
//     ];

//9 * 5
// let arr1 = 
//     [
//         [0,  1,  2,  3,  4],
//         [23, 24, 25, 26, 27],
//         [22, 39, 40, 41, 42],
//         [21, 38, 47, 48, 43],
//         [20, 37, 46, 45, 44],
//         [19, 36, 35, 34, 33],
//         [18, 17, 16, 15, 14],
//         [18, 17, 16, 15, 14],
//         [18, 17, 16, 15, 14]

//     ];

let arr1 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
];

console.log(spiralTraverse(arr1));

