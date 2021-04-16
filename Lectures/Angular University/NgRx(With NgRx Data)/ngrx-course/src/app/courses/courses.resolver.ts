// import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
// import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
// import { select, Store } from '@ngrx/store';
// import { AppState } from 'app/reducers';
// import {CourseActions} from './action.type';
// import {finalize, first, tap, take, filter} from 'rxjs/operators';
// import {areCoursesLoaded, courses} from './courses.selector';

// @Injectable()
// export class CourseResolver implements Resolve<any> {

//     loading = false;
    
//     constructor(private store: Store<AppState>) {}
    
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
//         return this.store.pipe(
//           select(areCoursesLoaded),
//           tap((coursesLoaded) => {
//             if (!this.loading && !coursesLoaded) {
//               this.loading = true;
//               this.store.dispatch(CourseActions.loadAllCourses());
//             }
//           }),
//           filter((coursesLoaded) => coursesLoaded),
//           first(),
//           finalize(() => (this.loading = false))
//         );
//     }
// }