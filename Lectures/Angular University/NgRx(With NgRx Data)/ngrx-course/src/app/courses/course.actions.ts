import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import {Course} from './model/course';

/* 
In this action we are not reporting a event to store, we are issuing a command to store to load 
    courses data from server
*/
export const loadAllCourses = createAction('[Courses Resolver] Load All Courses');


/* 
Here we are reprting that cocurses data is loaded
*/
export const allCoursesLoaded = createAction("[Load Courses Effect] All Courses Loaded",props<{courses: Course[]}>());

/* 
Update is special type made available by the @ngrx/entity package that makes it's easy to modify
    data stored in entity format.
    
export interface UpdateStr<T> {
    id: string;
    changes: Partial<T>;
}
*/

export const courseUpdated = createAction("[Edit Course Dialog] Course Updated",props<{update: Update<Course>}>());