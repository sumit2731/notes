const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }

 function curry(fn) {
    // your code here
    return function wrapper(...params) {
      if(fn.length === params.length) return fn(...params);
      else {
        return function(...params2) {
          let combinedParams = [...params,...params2];
          return wrapper(...combinedParams);
        }
      }
    }
  }

  console.log(curry(join)(1, 2, 3, 4))