import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course/course.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CoursesService, coursesServiceProviderFactory, SUMEET_TOKEN } from './courses/course.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    {
      provide:SUMEET_TOKEN,
      useValue: "App Module",
      // multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
