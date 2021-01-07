import {createSelector, createFeatureSelector} from '@ngrx/store';
import {CoursesState} from './reducers/course.reducers';

import * as fromCourses from './reducers/course.reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>("courses");

export const courses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
);

export const areCoursesLoaded = createSelector(
    selectCoursesState,
    (state) => state.allCoursesLoaded
);