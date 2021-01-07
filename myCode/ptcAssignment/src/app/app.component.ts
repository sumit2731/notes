import { Component, Inject, OnInit, ɵPlayer } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  constructor(private service: MyServiceService) {
    console.log("AppCompoent Constructor called");
    console.log(service.result);
  }
}
