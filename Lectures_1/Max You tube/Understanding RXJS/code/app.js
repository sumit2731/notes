// var numObservable = new Rx.Observable(observer => {
//     observer.next(7);
//     observer.next(13);
//     observer.next(17);
//     observer.next(19);
//     observer.next(23);
// });
// var scanned = numObservable
//               .startWith(0)
//               .scan((acc, v) => acc+v);
// scanned.subscribe(e => console.log(e + "is a Sum"));
// numObservable.subscribe(e => console.log(e + "is a number"));



// var clicks = Rx.Observable.fromEvent(document, 'click');
// var delayedClicks = clicks.delay(5000); // each click emitted after 1 second
// delayedClicks.subscribe(x => console.log(x));
// clicks.subscribe(()=> console.log('Cick happened'));

// var obs1 = Rx.Observable.interval(1000);
// obs1.delay(5000).subscribe((a) => console.log(a));


var clicks = Rx.Observable.fromEvent(document, 'click');
var delayedClicks = clicks.delayWhen(event =>
  Rx.Observable.interval(Math.random() * 5000)
);
delayedClicks.subscribe(x => console.log(x));