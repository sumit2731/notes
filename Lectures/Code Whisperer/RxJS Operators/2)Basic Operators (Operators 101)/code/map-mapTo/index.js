import Rx from 'rxjs';
const range = Rx.Observable.range(1,9);
range
.map((n)=> n*n)
.subscribe(a =>console.log(a));
const notificationApI = Rx.Observable.interval(1000);
notificationApI
.mapTo({type: "NOTIFICATION_ARRIVED"})
.subscribe((a) => console.log(a));