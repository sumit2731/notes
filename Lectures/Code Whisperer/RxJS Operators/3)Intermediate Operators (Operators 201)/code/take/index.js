import Rx from 'rxjs';

Rx.Observable.interval(1000)
.take(5)
.subscribe(n => console.log(n));