//currying


function Curry(fn) {
    let allParams = []; 
    return function f1(...params) {
        allParams = allParams.concat(params);
        if(allParams.length === fn.length) {
            let result = fn(...allParams);
            allParams = []; 
            return result;
        }
        else return f1; 
    }
}

function add (a,b,c) {
    return a + b + c;
}

let newAdd = Curry(add);
console.log(newAdd(1,2,3));
console.log(newAdd(1)(2,3));
console.log(newAdd(1)(2)(3));


function advanceCurry(fn) {
    return function wrapper(...params) {
        if(params.length === fn.length) return fn(...params);
        else {
            return function(...params2) {
                return wrapper(params.concat(params2));
            }
        }
    }
}


let newAdd2 = advanceCurry(add);
console.log(newAdd2(1,2,3));
console.log(newAdd2(1)(2,3));
console.log(newAdd2(1)(2)(3));


f