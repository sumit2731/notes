import Rx from 'rxjs';
const customObservable = Rx.Observable.create((observer)=> {
    // observer.next(42);
    // observer.complete(100);
    setInterval(() => {
        observer.next('New Value');
    }, 500);
    setTimeout(()=> {
        observer.complete(100);
    }, 2500);
});
customObservable.subscribe({
    next: a => console.log("Next", a),
    complete: a => console.log("Complete",a)
});