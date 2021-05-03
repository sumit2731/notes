import { Component, OnInit } from '@angular/core';
//import {function1 as dummyName3, dummyName} from '../utils/aggr';
import * as obj1 from '../utils/aggr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app2';

  ngOnInit() {
    //dummyName3();
    // console.log(dummyName);
    // function1();
    obj1.default();
  }
}
