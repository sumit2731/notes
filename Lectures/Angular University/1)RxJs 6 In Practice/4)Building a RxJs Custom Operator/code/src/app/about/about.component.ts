import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { of,concat,timer, interval, Subject, throwError, fromEvent  } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { tap, mapTo, share, shareReplay, take, takeUntil, scan, filter, withLatestFrom, map, 
  takeWhile, retry, mergeMap, delay, delayWhen } from 'rxjs/operators';



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

    ngOnInit() {
      // const source = interval(1000);
      // const source1 = source.pipe(
      //   tap(() => console.log('tap1')),
      //   tap(() => console.log('tap2')),
      //   shareReplay(),
      // );
      // const sub1 = source1.subscribe((val) => console.log(`sub1 ${val}`));
      // setTimeout(() => {
      //   const sub2 = source1.subscribe((val) => console.log(`sub2 ${val}`));
      // },5000);
    //   const source = interval(500);
    //   source.pipe(delay(5000)).subscribe(console.log);
    //   source
    //   .pipe(
    //     delayWhen(value => interval(5000))
    //   )
    //   .subscribe(console.log);
    
      const clicks = fromEvent(document, 'click');
      const delayedClicks = clicks.pipe(
        delayWhen(value => timer(4000,10000)),
      );
      delayedClicks.subscribe(x => console.log(x));
      interval(1000).subscribe(console.log);
    }
    
}
