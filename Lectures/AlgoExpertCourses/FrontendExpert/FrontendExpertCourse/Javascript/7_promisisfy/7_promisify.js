/**
 *  
    Write a promisify function (similar to the util.promisify Node.js function) that takes in a required callback function
    and returns a new "promisifed" version of that function.
  
    The callback function can take in any number of parameters, but its last parameter is guaranteed to be another callback 
    function, which takes in two parameters: an error and a value. We'll call this other callback function handleErrorAndValue
    for simplicity.
  
  
    For example, the following >adder function could be passed to the promisify function


    function adder(x, y,handleErrorAndValue) {
        const value = x +y;
        if(typeof value !== 'number') {
            const error = new Error('not a number);
            handleErrorAndValue(error, null)
        }else handleErrorAndValue(null, value)
    }
  
 */
function promisify(callback) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const handleErrorAndValue = (error, value) => {
        if (error) reject(error);
        resolve(value);
      };
      //handler function is arrow function so this is taken from outer function
      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}
