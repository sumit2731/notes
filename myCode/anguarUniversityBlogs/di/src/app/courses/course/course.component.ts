import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, SkipSelf } from '@angular/core';
import { CoursesService, coursesServiceProviderFactory, SUMEET_TOKEN } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  // providers: [
  //   {
  //     provide:SUMEET_TOKEN,
  //     useValue: "Course Component",
  //     // multi: true,
  //   }
  // ]
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CoursesService, @SkipSelf() @Inject(SUMEET_TOKEN) private sumeetToken) { 
    console.log("Inside Course Component");
    console.log(this.sumeetToken);
    
  }

  ngOnInit() {
  }

}
