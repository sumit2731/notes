import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-feature1-cmp1',
  templateUrl: './feature1-cmp1.component.html',
  styleUrls: ['./feature1-cmp1.component.scss']
})
export class Feature1Cmp1Component implements OnInit {
  randomNumber = 0;
  // constructor(public service1: Service1Service) {
  //   this.randomNumber = this.service1.randomNumber;
  // }

  ngOnInit() {
  }
  sampleFunction() {
    console.log("function called");
  }
}
