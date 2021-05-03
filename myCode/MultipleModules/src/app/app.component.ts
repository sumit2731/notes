import { Component, ViewChild } from '@angular/core';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MultipleModules';
  randomNumber = 0;
  @ViewChild('childComponent', {static: false}) childComponent;
  // constructor(public service1: Service1Service) {
  //   this.randomNumber = this.service1.randomNumber;
  // }

  lazyLoad() {}
  childMethod() {
    console.log(this.childComponent);
    this.childComponent.sampleFunction();
    this.childComponent.nativeElement.sampleFunction();
  }
}
