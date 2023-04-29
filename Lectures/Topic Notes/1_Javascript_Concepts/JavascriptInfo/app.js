class Thenable1 {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    // alert(resolve); // function() { native code }
    // // resolve with this.num*2 after the 1 second
    resolve(new Thenable2())
    
  }
}

class Thenable2 {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    resolve(2);
    
  }
}

let p1 = new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable1(result); // (*)
  })

p1.then(val => {
  console.log(val)
})

console.log(p1);

setTimeout(() => console.log(p1),5000);