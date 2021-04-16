import { element } from 'protractor';
import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isFavorite = false;
  showBoring(element: HTMLElement)
  {
        // element.style.display= 'block';
      this.renderer.setStyle(element,'display','block');
      }
      constructor(private renderer: Renderer2){

      }
testfunction(){
  if(this.isFavorite)
    {
       return '600px';
  }
      else{
        return '400px';
      }
      
}

}
