import { Component } from '@angular/core';
import {Option} from './custom-dropdown/input.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo2';

  options:Option<number>[] = [
    {label: 'Label1', value: 1},
    {label: 'Label2', value: 2},
    {label: 'Label3', value: 3}
  ]

  valueSelected(value) {
    console.log(value);
  }
}
