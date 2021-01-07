import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { Cmp4Component } from './cmp4/cmp4.component';


const routes: Routes = [
  // {path: '' , pathMatch: 'full', redirectTo: '/cmp1'},
  {path: 'cmp1/1', component: Cmp1Component},
  {path: 'cmp2/2', component: Cmp2Component},
  {path: 'cmp3/3',component: Cmp3Component,children: [
    {path: 'cmp4', component: Cmp4Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
