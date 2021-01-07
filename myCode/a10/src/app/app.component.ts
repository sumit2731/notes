import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {BehaviorSubject, interval,timer ,ReplaySubject, fromEvent, of,from, throwError, defer, bindCallback, Observable, concat, race,merge, ConnectableObservable, zip, forkJoin, combineLatest} from 'rxjs';
import { delay, delayWhen, map, mapTo, concatMap, take,publish,mergeMap, startWith, endWith, withLatestFrom} from 'rxjs/operators'
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a10';
  source;
  constructor() {
    let i = 0;
    console.log(i);
    let interval1 = setInterval(() => {
      i++;
      console.log(i);
      if(i == 9) clearInterval(interval1);
    }, 1000);
    let interval1$ = interval(1000).pipe(
      take(1)
    );
    let interval2$ = interval(2000).pipe(
      take(6)
    );
    let interval3$ = interval(3000).pipe(take(3));
    interval1$.pipe(withLatestFrom(interval2$)).subscribe(val => console.log(val),error => console.log("Error = " +error),() => console.log("Completed"));
    //.subscribe(val => console.log(val),error => console.log("Error = " +error),() => console.log("Completed"));
  }
  createObservable(obs1$: Observable<any>,time: number, value: any) {
    let obs2$ = of(value).pipe(
      delay(time)
    );
    return race(obs1$,merge(obs1$,obs2$));
  }
}        