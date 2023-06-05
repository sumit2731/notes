
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

/* 
Closure means a function bundled togather with refrences to its surrounding state (lexical env/scope).
see figure1. so inside y it forms a closure witha  varible which is part of x's lexical scope.
function y was bind to variables of x. it means it forms a closure, it has access to its parent lexical scope.
let's see a bit more complaicated example.
*/

function x2() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
 let z = x2();

 /* 
 what happens we  execute x2? EC is created, in variable part of EC diffrent variables are created. we know what happnes when a 
 function is inside another function, we know about lexical scope, lexical bindings, lexical parent and scope chain.
 
 x2 returns the funcction y.now EC of x2 is destroyed and removed from call satck. so all variables and all are gone. but we have 
 returned y from x2. now y no longer resides inside x2.so will y bheave inside another lexical scope? now we can call y outside
 x2. how will y find a? because x is gone, it's EC is destroyed.

 so when functions are returend from another functions they still maintain their lexical scope.they remember where they were actually
 present.so althrough x2 function no longer exists, y  remebers its lexical scope from it came from.so it has binding to a. so when we
 return a function, not just that function is returned but that closure is returned. closure is function with its lexical scope.

 so y has refrence to a, and that way it uses it.

 also remember that refrence to lexical scope is returned, it means memory location of variables not just values.
 it means a was not garbage collected but retianed when EC of x2 was removed from call satck.this can even happen at any level. see
 figure 2, where we have it at 2 levels..
 
 */

 /**
  * uses of closures 
  * 
  * Module Pattern
  * currying
  * Functions like once
  * memoize
  * maintaining state in async world
  * setTimeout
  * Iterators
  * many ...more
  * 
  * 
  * 
  */