import { Component } from '@angular/core';
import {trigger , state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
      backgroundColor: 'orange',
      width: '100px',
      height: '100px'
      })),
      state('clicked', style({
      backgroundColor: 'blue',
      width: '300px',
      height: '50px'
      })),
      state('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        width: '100px',
        height: '100px'
      })),
      transition('default => clicked', animate('200ms 500ms ease-in')),
      transition('clicked => default', animate(300)),
      transition('mousedown <=> clicked', animate(300)),
      // transition('clicked => mousedown', animate(300))
  ]),
  trigger ('numberEnteredState', [
    state('unselected', style({
      border: '1px solid black',
      padding: '5px'
    })),
    state('selected', style({
      border: '2px solid blue',
      padding: '4px',
      backgroundColor: 'lightblue'
    })),
    transition('unselected => selected', animate (300))
  ])
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;
  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 5000);
  }
}
