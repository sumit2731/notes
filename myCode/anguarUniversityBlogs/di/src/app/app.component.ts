import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di';
  childComp = false;
  coursesComp = false;
  courseCard = false;
  
  toggleChild() {
    this.childComp = !this.childComp;
  }
  toggleCourses() {
    this.coursesComp = !this.coursesComp;
  }
  toggleCourseCard() {
    this.courseCard = !this.courseCard;
  }
}
