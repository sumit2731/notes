import {compareCourses, Course} from '../model/course';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {CourseActions} from '../action.type';

/* 
These 2 proeprties i.e amp and array of numbers is called emtity format. but now we have to write reducers which manage these
formats and we need to write a helper function that converts this format into array maintaing the sequemce information provided in
id's.we have to do this for each entity, here ngRx entity can help us. this package help us to store data in our store, in below
entity format
*/

/* 
export interface CoursesState {
    
    // very common operation in an ngRX program is to look up an entity by identifier, if you would need to implement that with this
    // format,It would mean that we would have to loop through the array each time
   
  //courses: Course[];
  enitities: {[key : number]: Course},
  ids: number[];
} 
*/

/* 
Corses State give has preprties - entities and id's . IDE give sugegstions
*/

export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean;
};

/* 
createEntityAdapter takes an object with 2 properties for configuration.

    1)selectId: A method for selecting the primary id for the collection. Optional when the entity has a primary key of id
    2)sortComparer: A compare function used to sort the collection. The comparer function is only needed if the collection 
        needs to be sorted before being displayed. Set to false to leave the collection unsorted, which is more performant 
        during CRUD operations.

Code- 

    export function selectUserId(a: User): string {
        //In this case this would be optional since primary key is id
        return a.id;
    }
 
    export function sortByName(a: User, b: User): number {
    return a.name.localeCompare(b.name);
    }
 
    export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId,
    sortComparer: sortByName,
    });

*/

export const adapter = createEntityAdapter<Course>({ sortComparer: compareCourses });

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(initialCoursesState,
    on(CourseActions.allCoursesLoaded,(state,action) =>  {
        /* 
        *If we do not use entity package then we have to manage entity and id's manually 
        */
       //return { ...adapter.addAll(action.courses, state), allCoursesLoaded: true};
       //second argument is state
       return adapter.addAll(action.courses, {...state,  allCoursesLoaded: true});
        
    }),

    on(CourseActions.courseUpdated, (state,action) => {
        /* 
        *because of ngRx Entity it is easeir to update a course
        */
        return adapter.updateOne(action.update,state)
    })
);

/* 
select the array of user ids= selectIds;
select the dictionary of user entities = selectEntities;
select the array of users(sorted according to sorting function 
    given in adapter, if none if given then they are sorted in order of primary id) = selectAll;
select the total user count = selectTotal;
*/
export const {selectAll} = adapter.getSelectors();
