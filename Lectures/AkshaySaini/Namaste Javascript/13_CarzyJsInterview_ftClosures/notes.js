/**
 * How to use closures to have data encapsulation?
 */

function counter () {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

//scalable way

function counter2() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCount = function() {
        count--;
        console.log(count);
    }
}


/* 

Disadvantages of closures -

1)Overconsumption of memory. everytime closure is formed, lot of memoery is consumed.those closed over variables 
    are not garbage collected, so it is like accumulating lot of memoty if we create lot of closures.because
    those variables are not garbage collectoed untill that program expires.If not handled properly it can even
    lead to memory leaks.it can also freeze the browser.see lecture 17, it talks about closures in event lsiteners
    and why we remove event listeners.

*/

/* 
Grabage collector - Js is high level langauge.

How closures and Garbage collector are linked to each other

how modern browser smartly garbage collect unused variables? they remove variables which are not refered
inside functions.like here, z is garbage collected.this was showed by placing a breakpoint in function b,
when we printed x in console ot printed, but z gave refrence error.
*/

function a() {
    var x = 0, z= 10;
    return function b() {
        console.log(x)
    }
}