import { ApplicationRef, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,DoCheck, OnChanges {
  title = 'myCode';
  Counter = {
    count:1
  }
  _count = 0;
  //Counter:any;

  constructor(public appRef: ApplicationRef) {}

  ngOnInit() {
    //this.Counter = new BehaviorSubject({count: 0});
  }
  ngOnChanges() {
    //console.log("ngOnChanges of App Component");
  }
  ngDoCheck() {
    console.log("ngDocheck of app component");
  }
  incCount() {
    this.Counter.count = ++this.Counter.count;
    // let count = this.Counter.count +1;
    // this.Counter = {count}
    // this.Counter.next({
    //   count: ++this._count
    // });
  }
  refresh() {
    console.log("Refresh in root");
  }

  changeDetectorCalled() {
    console.log("%cChangeDetector of App Component Called",  "color:blue");
    return 1;
  }
}
