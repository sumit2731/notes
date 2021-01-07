import { Component, OnInit,Injector, ViewEncapsulation } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';
import { Cmp1Component } from './cmp1/cmp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'AngularPracticeCode';
  content = null;
  empDetails = {id: 1, name: "Sumeet"};
  detailsString = '';

  ngOnInit() {
    //this.content = `<app-cmp1></app-cmp1>`;
    //this.content = `<sumit></sumit>`;
  }
  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(Cmp1Component,{injector: injector});
    /* 
    This is js api which allows us to register a custom element
    */
    customElements.define('my-sumit', AlertElement);
    this.detailsString = JSON.stringify(this.empDetails);
    this.content = domSanitizer.bypassSecurityTrustHtml("<my-sumit detailsObj='detailsString' title='MyTitle'></my-sumit>");
    //this.content = `<app-hello-world></app-hello-world>`;
  }

  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }
}
