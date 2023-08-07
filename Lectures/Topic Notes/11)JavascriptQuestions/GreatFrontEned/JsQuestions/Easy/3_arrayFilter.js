/**
 * Points i missed in first implementation -
 *  a)additional params of callback
 *  b)handling of sparse arrays - Object.hasOwnProperty handles sparse arrays
 *      read this article of learn more abourt sparse arrays and how diffrent funcction handles them - 
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays
 *  c)Length of array should be saved before calling the callback, so adding new elements in array does not increase 
 *    iteration count
 *  d)before calling the function we should save the current element of array, that way even if the callback, new element is inserted
 *  in array at present index, we will inseted orignal element in our new array. to see what i mean see commneted out code at 
 *  bottom
 */


Array.prototype.myFilter = function (callbackFn, thisArg) {
  let resultArray = [], arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    //storing the value separately in case callback modifies this
    let value = this[i]
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) resultArray.push(value)
  }
  return resultArray;
};

/**
 * Spec Implementiom of filter
 */

Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (
    typeof callbackFn !== 'function' ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const len = this.length;
  const A = [];
  let k = 0;
  let to = 0;

  while (k < len) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    const kPresent = Object.hasOwn(this, k);
    if (kPresent) {
      const kValue = this[k];
      const selected = Boolean(callbackFn.call(thisArg, kValue, k, this));
      if (selected === true) {
        A[to] = kValue;
        to += 1;
      }
    }
    k += 1;
  }

  return A;
};

/* 
let people = [{name: 'sumeet'}, {name: 'kriti'}];


// let people2 = people.filter((person,index,array) => {
//     array[index] = {name: 'abc'}
//     return true;
// })


console.log(people);
//console.log(people2);
*/