let counter = 0;
 
class Counter {
  static instance;

  constructor() {
    if(!Counter.instance) Counter.instance = this;
    return Counter.instance;
  }
  getInstance() {
    return this;
  }
 
  getCount() {
    return counter;
  }
 
  increment() {
    return ++counter;
  }
 
  decrement() {
    return --counter;
  }
}

let obj1 = new Counter();
let obj2 = new Counter();

console.log(obj1 === obj2)