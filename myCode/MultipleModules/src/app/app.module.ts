import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { RouterModule } from '@angular/router';
import { Feature1Cmp1Component } from './feature1/feature1-cmp1/feature1-cmp1.component';
import { Service1Service } from './services/service1.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature1Module,
    RouterModule.forRoot([
      {path: 'feature1', component: Feature1Cmp1Component},
      {path: 'lazy1', loadChildren: () => import(`./lazyModules/lazy-module1/lazy-module1.module`).then(m => m.LazyModule1Module)},
      {path: 'lazy2', loadChildren: () => import(`./lazyModules/lazy-module2/lazy-module2.module`).then(m => m.LazyModule2Module)}
    ])
  ],
  //providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
