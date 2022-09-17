/* 
this inside normal function and arraow functions
*/

/**
 * concept - value of this in arrow function
 * 
 *  when an arrow function is invoked, JS literally takes the this value from the outer function where the arrow function 
 * is declared. I repeat, the outer function, NOT the outer object in which it is defined.
 */

const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a())
  console.log(obj.b())
  console.log(obj.c())
  console.log(obj.d())
  console.log(obj.e())
  console.log(obj.f()())
  console.log(obj.g())
  console.log(obj.h()())
  console.log(obj.i()())


/**
 * here main concept is on deciding on value of this inside function when we use call,bind,aply in arrow  function.
 * in arrow function they have no effect
 * 
 * How value of this is decided(increasing order of priority) -
 * a)imlicit binding
 * b)explicit binding (call, apply)
 * c)Hard Binding(bind)
 * d)new binding(function called in constructor mode)
 * e)arrow function(lexical binding) - when an arrow function is invoked, JS literally takes the this value from the outer 
 * function where the arrow function is declared. I repeat, the outer function, NOT the outer object in which it is defined.
 * 
 * see artciles in bookmark for more detials
 */

// This is a JavaScript Quiz from BFE.dev


const obj2 = {
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
  
  console.log(obj2.a)
  obj2.b()
  ;(obj2.b)()
  const b = obj2.b
  b()
  obj2.b.apply({a: 2})
  obj2.c()
  obj2.d()
  ;(obj2.d)()
  obj2.d.apply({a:2})
  obj2.e()
  ;(obj2.e)()
  obj2.e.call({a:2})
  obj2.f()()
  ;(obj2.f())()
  obj2.f().call({a:2})