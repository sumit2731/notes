import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Cmp1Component } from './feature1-cmp1/feature1-cmp1.component';
import { Service1Service } from '../services/service1.service';



@NgModule({
  declarations: [Feature1Cmp1Component],
  imports: [
    CommonModule
  ],
  //providers: [Service1Service],
  exports: [Feature1Cmp1Component]
})
export class Feature1Module { }
