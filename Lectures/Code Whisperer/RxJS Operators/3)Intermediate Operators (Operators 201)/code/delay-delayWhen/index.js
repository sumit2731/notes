import Rx from 'rxjs';

console.log('Starting');
// Rx.Observable.range(1,9)
// .delay(1000)
// .subscribe(n => console.log(n));

Rx.Observable.range(1,9)
.delayWhen((n) => Rx.Observable.timer(n* 1000))
.subscribe(n => console.log(n));

