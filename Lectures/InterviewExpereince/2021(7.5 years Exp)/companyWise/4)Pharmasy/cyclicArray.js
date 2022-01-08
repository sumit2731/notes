function findPivot(arr) {
    let start = 0, end= arr.length-1;
    while(start <= end) {
        let middle = Math.floor((start+end)/2);
        if(arr[middle] > arr[middle+1]) return middle+1;
        else if(arr[middle] < arr[middle-1]) return middle;
        else if(arr[middle] > arr[end]) {
            start = middle + 1;
        }
        else if(arr[start] > arr[middle]) {
            end = middle -1;
        }
        else return 0;
    }
}


/* 
[ 50 , 70 , 100, 120, 200,  300,  400,  420] - 0
[ 70 , 100, 120, 200, 300,  400,  420,  50]  - 1
[ 100, 120, 200, 300, 400,  420,  50 ,  70]  - 2
[ 120, 200, 300, 400, 420,  50 ,  70 ,  100]  - 3
[ 200, 300, 400, 420, 50 ,  70 ,  100,  120]  - 4
[ 300, 400, 420, 50 , 70 ,  100,  120,  200]  - 5
[ 400, 420, 50 , 70 , 100,  120,  200,  300]  - 6
[ 420, 50 , 70 , 100, 120,  200,  300,  400]  - 7
[ 50 , 70 , 100, 120, 200,  300,  400,  420]  - 8
*/
let arr = [ 50 , 70 , 100, 120, 200,  300,  400,  420];

console.log(findPivot(arr));