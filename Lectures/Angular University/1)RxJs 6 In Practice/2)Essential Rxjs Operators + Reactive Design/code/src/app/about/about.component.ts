import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { createHttpObservable } from '../common/util';
import {of, concat, interval, merge, Subscription, ConnectableObservable} from 'rxjs';
import { map, share, shareReplay} from 'rxjs/operators';

import { Subject,Observable } from "rxjs";
import { take, tap, multicast, mapTo } from "rxjs/operators";
import { zip } from "rxjs";
import { publish} from "rxjs/operators";


@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  subscriptions: Subscription[] = [];
  constructor() {}

  ngOnInit() {

    let sub1 = new Subject().pipe(
      tap(val => console.log("This is side efect"))
    );
    let i = 1;
    let inyerval = setInterval(() => {
      sub1.next(i++);
    }, 1000);

    sub1.subscribe(
      (val) => console.log("sub1 " + val),
      (error) => console.log(error),
      () => console.log("Completed S1")
    );

    setTimeout(() => {
      sub1.subscribe(
        (val) => console.log("sub2 " + val),
        (error) => console.log(error),
        () => console.log("Completed S2")
      );
    }, 3000);

    setTimeout(() => {
      sub1.complete();
      clearInterval(inyerval);
    }, 5000);

    setTimeout(() => {
      sub1.next(i);
      sub1.subscribe(
        (val) => console.log("sub3 " + val),
        (error) => console.log(error),
        () => console.log("Completed S3")
      );
    }, 7000);
  }
}


