/* 
1)how to define custome iterators. 2 ways -
     a)Define iterable function separately.
     b)Define iterable in same object. limitation is ony one loop can be active at a time.

2)diference between iterable vs iterator.

2)calling iterable explicitly.


3)iterables and array like.
     string is both iterable and array like.

4)how to convert iterable or arrayLike objects, into array using Array.from.
     to Array.from we can even pass mapping function.


Known Iterables -
     array
     string
     map
     set

Iterables uses -
     1)can be used in  Array.form to create array.
     2)can be used in spread syntx to create array.

Questions -
     1)unicode
 */




let range = {
    from: 1,
    to: 5,
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function () {
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  
  // now it works!
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }
  
  let arr = Array.from(range);
  
  console.log(arr);
  