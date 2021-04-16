import Rx from 'rxjs';
Rx.Observable.interval(1000)
.first((n) => (n!== 0 && n %2 ===0))
.subscribe(a => console.log(a));