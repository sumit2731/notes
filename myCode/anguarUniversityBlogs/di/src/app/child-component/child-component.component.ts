import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService, SUMEET_TOKEN } from '../courses/course.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  providers: [ 
    {
      provide:SUMEET_TOKEN,
      useValue: "Child Component",
      //multi: true,
    }
  ]
})
export class ChildComponentComponent implements OnInit {

  constructor(private CourseService: CoursesService, @Inject(SUMEET_TOKEN) private sumeetToken) {
    console.log("Inside Child Component");
    console.log(this.sumeetToken);
   }

  ngOnInit() {
  }

}
