import { Directive, Host, Inject } from '@angular/core';
import { CoursesService, SUMEET_TOKEN } from './course.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private CourseService: CoursesService, @Host() @Inject(SUMEET_TOKEN) private sumeetToken) {
    console.log("Inside App Highlight");
    console.log(this.sumeetToken);
   }

}
