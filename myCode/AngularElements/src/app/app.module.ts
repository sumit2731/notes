import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { createCustomElement } from '@angular/elements';
import {Injector } from '@angular/core';
import { Cmp2Component } from './cmp2/cmp2.component';

@NgModule({
  declarations: [
    Cmp1Component,
    HelloWorldComponent,
    AppComponent,
    Cmp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  entryComponents: [Cmp1Component,HelloWorldComponent,AppComponent, Cmp2Component],
})
export class AppModule {
  constructor(injector: Injector) {

    const app = createCustomElement(AppComponent, { injector: injector });
    customElements.define('cus-app', app);

    const cmp2 = createCustomElement(Cmp2Component, { injector: injector });
    customElements.define('cus-cmp2', cmp2);

    const cmp1 = createCustomElement(Cmp1Component, { injector: injector });
    customElements.define('cus-cmp1', cmp1);
  }
  ngDoBootstrap() { }
 }
