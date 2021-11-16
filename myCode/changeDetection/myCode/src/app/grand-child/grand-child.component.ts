import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent implements OnInit,DoCheck {
  @Input() numbers = [1];
  localNumber = 1;
  constructor(private cdrRef:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChnages of GrandChildComponent Called");
    console.log(changes);
  }
  
  ngOnInit() {
    // setTimeout(() => {
    //   console.log("Set Interval called");
    // }, 10000);
  }

  ngDoCheck() {
    console.log("doCheck of GrandChild1");
  }
  refresh() {
    console.log("refresh of GrandChild Called");
    //this.cdrRef.detectChanges();
    //this.cdrRef.markForCheck();
  }

  incLocal() {
    this.localNumber++;
  }

  dummyFunction() {
    console.log("%cChnage detector of grandChildCalled", "color:red");
    return 1;
  }

}
