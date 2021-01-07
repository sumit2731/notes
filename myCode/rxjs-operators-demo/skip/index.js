import Rx from 'rxjs';
import {fromStdIn} from '../utility';
console.log('Input Will be accepted in 2 Seconds');
fromStdIn()
// .skip(2)
// .take(2)
// .skipWhile(v => v !== 'g')
.skipUntil(Rx.Observable.timer(2000))
.subscribe(k => console.log(k));