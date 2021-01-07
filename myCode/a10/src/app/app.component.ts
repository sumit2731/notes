import { Component } from '@angular/core';
import {BehaviorSubject, interval, ReplaySubject} from 'rxjs';
import { publishReplay, refCount,take,shareReplay, publish,share, publishBehavior, publishLast} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a10';
  source;
  constructor() {
    this.source = interval(1000).pipe(
      take(3),
      //publish(),
      //publishReplay(2),
      //publishBehavior(100),
      //publishLast(),
      //share()
      //shareReplay({refCount: true, bufferSize: 2}),
      shareReplay(2)
      //refCount()

    );
    const sub1 = this.source.subscribe(x => console.log('sub 1', x), error => console.log("error"), () => console.log("Sub 1completed"));
    //const sub2 = this.source.subscribe(x => console.log('sub 2', x), error => console.log("error"), () => console.log("Sub 2 completed"));
    let sub3;

    setTimeout(() => {
      sub1.unsubscribe();
      //sub2.unsubscribe();
    }, 4000);


    setTimeout(() => {
      console.log("Third Subscription");
      sub3 = this.source.subscribe(x => console.log('sub 3', x), error => console.log("error"), () => console.log("Sub 3 completed"));
      // sub1.unsubscribe();
      // sub2.unsubscribe();
      // sub3.unsubscribe();

    }, 5000);

    setTimeout(() => {
      //sub1.unsubscribe();
      //sub2.unsubscribe();
      sub3.unsubscribe();
    }, 8000);
    
    //let b1 = new ReplaySubject<any>(2);
    //let b1 = new BehaviorSubject<any>(2);
    //b1.next(1);
    // b1.next(2);
    //b1.subscribe(x => console.log('sub 1', x), error => console.log("error"), () => console.log(" Sub 1 completed"));
    //b1.next(3);
    //b1.complete();
    //b1.subscribe(x => console.log('sub 2', x), error => console.log("error"), () => console.log(" sub 2 completed"));
    // b1.next(4);
  }
}
