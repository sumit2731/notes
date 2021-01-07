import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {finalize, first, tap, take, filter, mapTo, map} from 'rxjs/operators';
import { CourseEntityService } from './courses-entity.service';

@Injectable()
export class CourseResolver implements Resolve<boolean> {
  loading = false;

  constructor(private courseEntityService: CourseEntityService) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
      //metods for getting Data
      /* 
      this.courseEntityService.getAll
      this.courseEntityService.getByKey
      this.courseEntityService.getWithQuery 
      */
     /* 
     *It makes a api call t get data and if it gets back data it stores them in store
     in entityCache.Course and data stored in course property is in entities format
     */
    /* 
    It gives property from store- entityCache.Course.loaded
    */

    // return this.courseEntityService.getAll().pipe(
    //      map(courses => !! courses)
    // );
    
    return this.courseEntityService.loaded$.pipe(
      tap(loaded => {
        if(!loaded) {
          this.courseEntityService.getAll();
        }
      }),
      filter(loaded => loaded),
      first()
    );

  }
}
