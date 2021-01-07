import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'angularEleemnts2';

  ngOnInit() {
    console.log("Cockpit appcomponent ngOnit called");
  }

  ngOnDestroy() {
    console.log("Coclpit appcomponent appDestroy called");
  }
  
}
