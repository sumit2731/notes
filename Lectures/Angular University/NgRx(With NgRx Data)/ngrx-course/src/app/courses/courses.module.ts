import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {EditCourseDialogComponent} from './edit-course-dialog/edit-course-dialog.component';
import {CoursesHttpService} from './services/courses-http.service';
import {CourseComponent} from './course/course.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {compareCourses, Course} from './model/course';

import {compareLessons, Lesson} from './model/lesson';

import {CourseEntityService} from './services/courses-entity.service';
import {CourseResolver} from './services/courses.resolver';
import {CoursesDataService} from './services/courses.data.service';


export const coursesRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: {
      courses: CourseResolver
    }
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
  },
];

/* 
Here we will have one entry for each entity in this module
*/
const entityMetdata : EntityMetadataMap = {
  /* 
  This object has some properties which will configure your data
  */
  Course: {entityDispatcherOptions: {optimisticUpdate: true}}
  
};


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent,
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent,
  ],
  entryComponents: [EditCourseDialogComponent],
  providers: [
    CoursesHttpService,
    CourseEntityService,
    CourseResolver,
    CoursesDataService,
  ],
})
export class CoursesModule {
  /* 
So because our CoursesModule is a lazy loaded module, so we are going to have to inject here a new service
  which is the EntityDefinitionService and we are going to use it to register our entity configuration.


 EntityDataService is the service that we need to use to register special data services for our entities.
*/
  constructor(private eds: EntityDefinitionService,private entityDataService: EntityDataService,
    private coursesDataService: CoursesDataService) {
      this.eds.registerMetadataMap(entityMetdata);
      /* 
    Here we mwan that for Courses entity use for Custom DataService.
    so now @ngrx?Data knows that for Course Entity, it should not use its default behavior for fetching and processing data from the backend.
    */
      this.entityDataService.registerService("Course", this.coursesDataService);
    }
}
