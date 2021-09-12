import { Component, Inject, OnInit } from '@angular/core';
import { SUMEET_TOKEN } from 'src/app/courses/course.service';

@Component({
  selector: 'app-lazycmp1',
  templateUrl: './lazycmp1.component.html',
  styleUrls: ['./lazycmp1.component.scss']
})
export class Lazycmp1Component implements OnInit {

  constructor( @Inject(SUMEET_TOKEN) private sumeetToken) {
    console.log("Inside LaztCmp1 Component");
    console.log(this.sumeetToken);
  }

  ngOnInit() {}

}
