// This is a JavaScript Quiz from BFE.dev

const obj = {
    a: 1,
    b() {
      return this.a
    }
  }
  console.log(obj.b()) //1
  console.log((true ? obj.b : a)()) //undefined
  console.log((true, obj.b)()) //undeined
  console.log((3, obj['b'])()) //undefined
  console.log((obj.b)())//1
  console.log((obj.c = obj.b)()) //undefined
  


