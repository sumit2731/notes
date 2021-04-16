import { Injectable } from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data'
 
/* 
This is an @ngrx/Data service that will allow us to for example query the data from the backend
    and save it in the store and it will also allow us to interact with the data directly on the store.

So we will be able to access any courses that are present in the store once they are loaded using the
    CourseEntityService.
*/

import { Course } from "../model/course"

@Injectable()

/* 
Now let's make this service @ngrx/Data Entity service by extending EntityCollectionServiceBas
Generic paramteres is typr of entity
*/
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  /* 
    EntityCollectionServiceElementsFactory is going to be the service that is going to create some of the core elements 
        that are going to enable us to build a CourseEntityService.So we don't need to interact with the serviceElementsFactory 
        directly. Instead we simply  pass it to the constructor of superclass.
*/
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Course", serviceElementsFactory);
  }
}


/* 
let service = new CourseEntityService();

// We can take series of entities and add it to store

service.addAllToCache

//It is going to trigger a back and rest request that is going to try to fetch the curses data and
//   we don't even need to build that http request manually ourselves that is going to be taken care 
//by @ngrx/data using some conventions that we are going to cover later in course

service.getAll
service.getWithQuery

// here we are accessing the entities inside the store
service.entities$  
*/
