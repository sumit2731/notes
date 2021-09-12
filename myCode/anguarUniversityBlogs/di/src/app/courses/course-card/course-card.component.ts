import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService, SUMEET_TOKEN} from '../course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  providers: [
    {
      provide:SUMEET_TOKEN,
      useValue: "Course Card Component",
      // multi: true,
    }
  ]
})
export class CourseCardComponent implements OnInit {

  showCourse =false;

  constructor(private CourseService: CoursesService, @Inject(SUMEET_TOKEN) private sumeetToken) {
    console.log("Inside Course Card");
    console.log(this.sumeetToken);
   }

  ngOnInit() {
  }
  toggleShowCourse() {
    this.showCourse = !this.showCourse;
  }

}
