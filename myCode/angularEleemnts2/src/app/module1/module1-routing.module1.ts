import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp11Component } from './cmp11/cmp11.component';
import { Cmp12Component } from './cmp12/cmp12.component';
import { Cmp13Component } from './cmp13/cmp13.component';
import { Cmp14Component } from './cmp14/cmp14.component';



const routes: Routes = [
  {
    path: 'module1', component: Cmp11Component,children: [
      {
        path: 'cmp12', component: Cmp12Component, children: [
          { path: 'cmp13', component: Cmp13Component }
        ]
      },
    ]
  },
  { path: 'module1/cmp14', component: Cmp14Component }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
