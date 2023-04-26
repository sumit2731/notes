/* Question1 */

const promise1 = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  // value returned by catch is used in next then block
  .catch(error => console.log(error))
  .then(error => console.log(error));


/* 
Some error occurred
undefined
*/



/* Question 2 */
const promise2 = new Promise(res => res(2));
promise2.then(v => {
        console.log(v); 
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    /* 
    finally do not get any argument and value retruned by finally is not used in promise chnaining is not used
    */
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v); 4
    });


/* 
2
4
undefined
8
*/