import Rx from 'rxjs';
console.log("Made API Request");
Rx.Observable.timer(2000,500)
.map(n => n+1)
.startWith(0)
.subscribe(a => console.log(a));