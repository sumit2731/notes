/* 
Function that deepClones a Object
*/

function objectDeepClone(cloningParameter) {
    let newObj = {};
    for(let key of Object.keys(cloningParameter)) {
        if(typeof cloningParameter[key] !== 'object') newObj[key] = cloningParameter[key]
        else newObj[key] = deepClone(cloningParameter[key])
    }
    return newObj;
}

// let testObj = {
//     a: 1,
//     b: { 
//         c: 2,
//         d: {e: 3}
//     },
//     f: {g: 4},
//     h: 5
// }

// let deepClonedObj = deepClone(testObj);
// testObj.b.c = 200;

// console.log(deepClonedObj);

/* 
Functon that deepClones a Array
*/
function arrayDeepClone(arr) {
    let newArr = [];
    for(let element of arr) {
        if(Array.isArray(element)) newArr.push(arrayDeepClone(element));
        else newArr.push(element);
    }
    return newArr;
}

// let testArray = [
//     1,
//     [2,3],
//     [[4], [5,6]],
//     7
// ]


// let deepClonedArray = arrayDeepClone(testArray);
// testArray[2][1][0] = 500;
// console.log(testArray);
// console.log(deepClonedArray)

/* 
Function that deepClones a both Oject and array
*/
function deepClone(cloningParameter) {
    let clonedObj;
    if(Array.isArray(cloningParameter)) {
        
        clonedObj = [];
        
        for(let element of cloningParameter) {
            if(typeof element === 'object') clonedObj.push(deepClone(element));
            else clonedObj.push(element);
        }
        
    }
    else if(typeof cloningParameter === 'object') {
        clonedObj = {};
        for(let prop of Object.keys(cloningParameter)) {
            if(typeof cloningParameter[prop] === 'object') clonedObj[prop] = deepClone(cloningParameter[prop]); 
            else clonedObj[prop] = cloningParameter[prop];
        }
    }
    return clonedObj;
}

let customObject = {
    name: 'Sumeet',
    hobbies: ['coding','UI Development'],
    address: {state: 'Haryana', city: 'Ggn'}
}

let clonedCustomObject = deepClone(customObject);
customObject.address.state = 'Punjab';
console.log(customObject);
console.log(clonedCustomObject);