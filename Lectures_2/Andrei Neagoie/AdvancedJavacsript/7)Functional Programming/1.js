const array = [1,2,3];

function mutateArray(arr) {
    arr.pop();
}

function mutateArray2(arr) {
    arr.forEach(item => {
       arr.push(1); 
    });
}

mutateArray(array);
mutateArray(array);
console.log(array);