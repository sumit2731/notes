import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2Cmp1Component } from './lazy2-cmp1/lazy2-cmp1.component';
import { RouterModule } from '@angular/router';
import { Service1Service } from 'src/app/services/service1.service';



@NgModule({
  declarations: [Lazy2Cmp1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Lazy2Cmp1Component}
    ])
  ],
  //providers: [Service1Service]
})
export class LazyModule2Module { }
