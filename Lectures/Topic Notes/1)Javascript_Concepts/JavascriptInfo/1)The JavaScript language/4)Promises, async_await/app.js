function createPromise(value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), time)
    });
}

/**
 * Snippet 1
 */
createPromise(1,1000)
    .then((val) => createPromise(2*val,2000))//1
    .then((val) => 1) //2
    .then(value => console.log(value)) //1


/**
 * Snippet 2
 */

createPromise(1,1000)
    .then(val => { // 1
        return createPromise(5,1000)
            .then(value => value * 100) // 5
    })
    .then(val => console.log(val)) //500

/**
 * Snippet 3
 */

createPromise(1,3000).then(val => console.log(val)) //

 createPromise(1,1000)
    .then(val => { // 1
        return createPromise(5,1000)
            .then(value => createPromise(10,1000)) // 5
    })
    .then(val => console.log(val)) //10