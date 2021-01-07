const array = [1, 2, 3];

function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item*2);
}

const array1 = removeLastItem(array);
const array2 = multiplyBy2(array);
console.log(array);
console.log(array1);
console.log(array2);