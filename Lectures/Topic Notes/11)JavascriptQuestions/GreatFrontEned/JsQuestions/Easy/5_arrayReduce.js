/**
 * nuances to be taken care of -
 * 
 * a)The reducer callback is passed the currentIndex and array as the third and fourth argument respectively?
   b)If there is no initial value supplied to the reduce function, the array element at index 0 is used and the iteration starts
     from the next element (index 1 instead of index 0).
    c)sparse element should not be iterted upon
    d)array element should be saved separatly before calling educer, because even if reducer function chnages it, we should use 
        orignal value
 * 
 * 
 * Cases missed in first attempt
 *  1)function should throw error if initial accum value is not provided and length of array is 0
 */

Array.prototype.myReduce = function(callbackFn,accumInitialValue ) {
    if((typeof callbackFn != 'function') || !callbackFn.apply || !callbackFn.call) throw new Error(`${callbackFn} is not a function`);
    let accumValue = accumInitialValue, startingIndex = 0, arrayLength = this.length;
    if(!accumInitialValue && (accumInitialValue !=0)) {
        if(this.length == 0) throw new Error(`Reduce of empty array with no initial value`);
        startingIndex = 1;
        accumValue = this[0]
    }
    for(let i = startingIndex; i < arrayLength; i++) {
        if(Object.hasOwn(this,i)) {
            let currentValue = this[i];
            accumValue = callbackFn(accumValue,currentValue,i,this);
        }
    }
    return accumValue;
}

const add = (prev, curr) => prev + curr;
const subtract = (prev, curr) => prev - curr;

console.log([].myReduce(add, 0))
console.log([].myReduce(subtract, 0))


// [].reduce((accum) => accum);