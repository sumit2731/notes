import Rx from 'rxjs';
Rx.Observable
.throw()
.subscribe({
    next : n => console.log(n),
    error: e => console.log('Entered Error State', e)
});