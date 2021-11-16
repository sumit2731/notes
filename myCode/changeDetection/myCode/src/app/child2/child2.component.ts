import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component implements OnInit,DoCheck {

  @Input() Counter:{count: number} = {count: 0}
  //@Input() Counter =  new BehaviorSubject({count: 0});
  //count: number = 0;
  constructor() { }

  ngDoCheck() {
    //console.log("ngDocheck of Child2");
  }
  ngOnInit(): void {
    // this.Counter.subscribe(data => {
    //   this.count = data.count
    // });
  }

}
