import Rx from 'rxjs';
Rx.Observable
.range(1,9)
.last()
.subscribe(a => console.log(a));