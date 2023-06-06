// This is a JavaScript Quiz from BFE.dev
/**
 * Value of this inside arraow function depends where function is defined. and cannot be chnaged by using call, bind or apply
 * for arrow function returned by another function, value of this depnds upon when rerurned function was getting defined
 */

const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  
  console.log(obj.a)//1
  obj.b()//1
  ;(obj.b)() //1
  const b = obj.b
  b()//undefined
  obj.b.apply({a: 2})//2
  obj.c() //1
  obj.d() //undefined 
  ;(obj.d)()// undefined //
  obj.d.apply({a:2})// undefined ==2
  obj.e()//undefined
  ;(obj.e)() //undefined //
  obj.e.call({a:2}) //undefined == 2
  obj.f()() //1
  ;(obj.f())() //1
  obj.f().call({a:2})// undefined == 1