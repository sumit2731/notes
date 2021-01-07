import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor (private renderer: Renderer2) {}
  title = 'App Works';
  isFavorite =  false;
  showBoring = false;
  width = 10;
  onShowBoring(element: HTMLElement) {
    // element.style.display = 'block';
       this.renderer.setStyle(element, 'display', 'block');
  }
}
