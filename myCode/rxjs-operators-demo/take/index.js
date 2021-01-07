import Rx from 'rxjs';


Rx.Observable.interval(100)
// .take(5)
// .takeWhile((n) => n <7)
.takeUntil(Rx.Observable.timer(1000))
.subscribe(n => console.log(n));