import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CoursesService, coursesServiceProviderFactory,SUMEET_TOKEN } from '../course.service';
import { HttpClient } from '@angular/common/http';
import { CourseComponent } from './course.component';
import { HighlightDirective } from '../highlight.directive';



@NgModule({
  declarations: [CourseCardComponent, CourseComponent,HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [CourseCardComponent, CourseComponent],
  providers: [
    CoursesService,
    {
      provide:SUMEET_TOKEN,
      useValue: "Course Module",
      // multi: true
    }
  ]
})
export class CourseModule { }
