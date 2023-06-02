/**
 * Failed to check if all values in terav;e are promise or not
 */

function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
        let successHandler = value => resolve(value);
        let rejectHandler = error => reject(error)
        for (let promise of iterable) {
            //missed this condition
            promise = Promise.resolve(promise);
            promise.then(successHandler, rejectHandler)
        }
    });
}