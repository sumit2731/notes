import { Component } from '@angular/core';
import {logMethod} from 'sumit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sumit-ng6-lib-app';
  constructor() {
     logMethod();
  }
}
