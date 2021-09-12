import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lazycmp1Component } from './lazycmp1/lazycmp1.component';
import { SUMEET_TOKEN } from '../courses/course.service';


const routes: Routes = [
  {
    path: '',
    component: Lazycmp1Component,
  }
]

@NgModule({
  declarations: [Lazycmp1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide:SUMEET_TOKEN,
      useValue: "Lazy Module",
      // multi: true,
    }
  ]
})
export class LazyLoadedModule { }
