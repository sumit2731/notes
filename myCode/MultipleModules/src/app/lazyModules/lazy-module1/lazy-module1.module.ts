import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lazy1Cmp1Component } from './lazy1-cmp1/lazy1-cmp1.component';
import { Service1Service } from 'src/app/services/service1.service';



@NgModule({
  declarations: [
    Lazy1Cmp1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Lazy1Cmp1Component}
    ])
  ],
  //providers: [Service1Service]
})
export class LazyModule1Module { }
