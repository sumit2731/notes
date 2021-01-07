import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp11Component } from './cmp11/cmp11.component';
import { Cmp12Component } from './cmp12/cmp12.component';
import { Cmp13Component } from './cmp13/cmp13.component';
import { Cmp14Component } from './cmp14/cmp14.component';
import {Module1RoutingModule} from './module1-routing.module1';



@NgModule({
  declarations: [Cmp11Component, Cmp12Component, Cmp13Component, Cmp14Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
