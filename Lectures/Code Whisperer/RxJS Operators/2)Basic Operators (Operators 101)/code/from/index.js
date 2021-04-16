import Rx from 'rxjs';
const fibonacciArray = [1,1,2,3,5,8,13];
function * fibonacciGenerator () {
    let a =1, b =1;
    while (true) {
        let c = a+b;
        yield c;
        a =b;
        b = c;
    }
};
const fibonacciPromise = new Promise(r => r(fibonacciArray));
Rx.Observable
// .from(fibonacciPromise)
.from(fibonacciGenerator())
.take(20)
.subscribe((a) => console.log(a));