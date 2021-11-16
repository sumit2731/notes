import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit,DoCheck {
  lastNumber = 3
  numbers = [1,2,3];
  localNumber = 1;
  constructor(private cdrRef: ChangeDetectorRef) { 
    //this.cdrRef.detach();
  }
  @Input() Counter:{count: number} = {count: 0}
  //@Input() Counter =  new BehaviorSubject({count: 0});
  count: number = 0;

  ngDoCheck() {
    //console.log("ngDocheck of Child1");
  }
  ngOnInit(): void {
    // this.Counter.subscribe(data => {
    //   this.count = data.count;
    //   this.cdrRef.markForCheck();
    // });
    // setInterval(() => {
    //   //this.numbers.push(this.lastNumber);
    //   //this.numbers = [...this.numbers, ++this.lastNumber];
    //   this.numbers.push(++this.lastNumber);
    //   console.log(this.numbers);
    //   // this.cdrRef.detectChanges();
    //   //this.cdrRef.markForCheck();
    // }, 1000)
  }

  incGrandChild() {
    this.numbers.push(++this.lastNumber);
    //this.cdrRef.detectChanges();
    //this.numbers = [...this.numbers, ++this.lastNumber];
  }
  refresh() {
    console.log("Only Event Listener Called");
    this.cdrRef.detectChanges();
    //this.cdrRef.markForCheck();
  }
  incLocalNumber() {
    this.localNumber++;
  }
  detach() {
    this.cdrRef.detach();
  }
  reAttach() {
    this.cdrRef.reattach();
  }

  dummyFunction() {
    console.log("%cChnage detector of Child1 Called", "color:yellow");
    return 1;
  }
}
