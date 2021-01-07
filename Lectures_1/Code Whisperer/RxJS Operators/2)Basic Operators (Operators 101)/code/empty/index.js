import Rx from 'rxjs';
Rx.Observable.empty().subscribe({
    next: a => console.log('Emit', a),
    complete: a=> console.log('Complete',a)
});