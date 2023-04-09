Function.prototype.defer = function(ms) {
    let fn = this;
    return function(...args) {
        setTimeout(() => fn(...args) , ms);
    }
}


function f(a, b) {
    console.log( a + b );
  }
  
f.defer(5000)(1, 2); // shows 3 after 1 second