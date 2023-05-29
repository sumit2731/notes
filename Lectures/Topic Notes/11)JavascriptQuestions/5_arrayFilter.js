/**
 * Points i missed in first implementation -
 *  a)additional params of callback
 *  b)handling of sparse arrays - Object.hasOwn handles sparse arrays
 *      read this article of learn more abourt sparse arrays and how diffrent funcction handles them - 
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays
 *  c)Length of array should be saved before calling the callback, so adding new elements in array does not increase 
 *    iteration count
 *  d)before calling the function we should save the current element of array, that way even if this element is chnaged in 
 *    callback function then orignal array will be moddified but newly generated array will get orignal element only
 */


Array.prototype.myFilter = function (callbackFn, thisArg) {
    let resultArray = [], arrayLength = this.length;
    for(let i = 0; i< arrayLength; i++) {
        //storing the value separately in case callback modifies this
        let value = this[i]
      if(Object.hasOwn(this,i) && callbackFn.call(thisArg,this[i],i,this)) resultArray.push(value;)
    }
    return resultArray;
  };