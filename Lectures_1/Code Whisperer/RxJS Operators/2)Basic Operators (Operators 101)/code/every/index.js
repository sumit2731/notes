import Rx from 'rxjs';
const range = Rx.Observable
.interval(1000)
.take(10);
range
.map(n => n*2)
.do(v => console.log("Value: ",v))
.every(n => n % 2 ==0 )
.subscribe(b => console.log(b));