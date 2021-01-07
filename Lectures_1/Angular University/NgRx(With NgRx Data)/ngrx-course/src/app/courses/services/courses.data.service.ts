import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import { response } from 'express';
import { map } from 'rxjs/operators';
import {Course} from '../model/course';

/* 
So we are going to learn how to configure @ngRx/data to handle custom payloads and we are also
going to see how to handle cases where the url cannot be easily guessed.So in order to be able to handle 
custom rest payloads that don't follow the format expected by @nfrx/data we are going to be needing what is 
known as a data service.

So this is a simple customized service that is related here to the CourseEntityService and that
is going to allow us to tell to @ngrx/Data to how to handle the format returned by our end point.
*/

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
    constructor(public http: HttpClient, public httpUrlGenerator: HttpUrlGenerator) {
        super('Course', http, httpUrlGenerator);
    }
    /* 
    Here we can override methods of CourseEntityService
    */
   getAll() {
       return this.http.get('/api/courses').pipe(
           map(response => response['payload'])
       );
   }
}