import { DoBootstrap, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { RouterTestingModule } from '@angular/router/testing';


const routes: Routes = [
  {path: 'home', component: SettingsHomeComponent},
  {path: 'profile', component: SettingProfileComponent},
  {path: '', redirectTo: 'module1', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes,{initialNavigation: false})],
  //imports: [RouterModule.forRoot(routes,{initialNavigation: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {}
  
 }
