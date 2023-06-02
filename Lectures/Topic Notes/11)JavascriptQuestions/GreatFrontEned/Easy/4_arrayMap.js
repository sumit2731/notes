/**
 * Points missed in first implementation
 * 
 * a)length of returend array needs to be same as orignal array, it's just that for sparse element, result array will also have sparse 
 *  element
 */

Array.prototype.myMap = function (callbackFn, thisArg) {
    if ((typeof callbackFn != 'function') || !callbackFn.apply || !callbackFn.call) throw new Error(`${callbackFn} is not a function`);
    let arrayLength = this.length, resultArray = new Array(arrayLength)
    for (let i = 0; i < arrayLength; i++) {
        let currentValue = this[i];
        if (Object.hasOwn(this, i)) {
            let mappedvalue = callbackFn.call(thisArg, currentValue, i, this);
            resultArray[i] = mappedvalue;
        }
    }
    return resultArray;
}

/**
 * Spec Solution
 */

Array.prototype.myMap = function (callbackFn, thisArg) {
    if (
        typeof callbackFn !== 'function' ||
        !callbackFn.call ||
        !callbackFn.apply
    ) {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    const len = this.length;
    const A = new Array(len);
    let k = 0;

    while (k < len) {
        // Ignore index if value is not defined for index (e.g. in sparse arrays).
        const kPresent = Object.hasOwn(this, k);
        if (kPresent) {
            const kValue = this[k];
            const mappedValue = callbackFn.call(thisArg, kValue, k, this);
            A[k] = mappedValue;
        }
        k = k + 1;
    }

    return A;
};