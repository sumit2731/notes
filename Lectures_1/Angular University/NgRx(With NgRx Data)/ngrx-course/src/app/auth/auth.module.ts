import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth.service";
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './reducers';
import {AuthGuard} from './auth.guard';
import { AuthEffects } from "./auth.effects";
import { NewComponnetComponent } from './new-componnet/new-componnet.component';
import { NewComponent2Component } from './new-component2/new-component2.component';
import { NewComponnet3Component } from '../new-componnet3/new-componnet3.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    /* 
     we have specified here a property path for the state that is managed by
     this module and we're going to see this path into their tools in a moment.
     side effect a are going to be implemented under the form of an injectable 
     angular service
    */
    StoreModule.forFeature("auth", fromAuth.authReducer),
    /* 
    T
    */
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent, NewComponnetComponent, NewComponent2Component, NewComponnet3Component],
  exports: [LoginComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
