import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import {CourseActions} from "./action.type";
import {concatMap, tap, map} from 'rxjs/operators';
import { CoursesHttpService } from "./services/courses-http.service";


@Injectable()
export class CoursesEffect {
  /* 
  *type of this variable shoule be be Observable<Action> or you need
  to pass second argument i.e {dispatch: false}, otherwise it will create infine loop
  */
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(() => this.courseHttpService.findAllCourses()),
      map((courses) => CourseActions.allCoursesLoaded({ courses }))
    )
  );

  /* 
  *Here we are using concap because we want saving operations to be done sequentially
  */
  saveCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.courseUpdated),
    concatMap(action => this.courseHttpService.saveCourse(action.update.id, action.update.changes))
  ),{dispatch: false});

  constructor(
    private actions$: Actions,
    private courseHttpService: CoursesHttpService
  ) {}
}