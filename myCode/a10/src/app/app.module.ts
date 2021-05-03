import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do-component/to-do-component.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CommonModule } from '@angular/common';
//import { Feature1Module } from './feature1/feature1.module';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
    //Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
