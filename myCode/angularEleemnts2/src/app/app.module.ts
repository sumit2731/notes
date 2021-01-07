import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { createCustomElement } from '@angular/elements';
import {Module1Module} from './module1/module1.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SettingsHomeComponent,
    SettingProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector, private router: Router) {
    console.log("Cockpit AppModule constructor called");
    // setTimeout(() => {
    //   console.log("Initiate Navigation");
    //   this.router.initialNavigation();
    // }, 10000);
    let customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('custom-a',customElement);
   
  }
 
  ngDoBootstrap() {
    console.log("Cockpit ngDoBootstrap Called");
    this.router.initialNavigation();
    
  }

  ngOnit() {
    
  }
 }
