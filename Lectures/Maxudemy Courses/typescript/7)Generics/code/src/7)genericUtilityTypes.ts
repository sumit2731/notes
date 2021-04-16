
/**
These are built in types ts shipd with which utilize generic types
for full list see docs-
@Docs  https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt
*/

/**
 * @Partials
 */

 interface CourseGoal {
     title: string;
     description: string;
     completeUntil: Date;
 }

 /**
  * without @Partial , we will get errors
 /* function createCourseGoalTitle(title: string, description: string, completeUntil:Date): CourseGoal {
    let courseGoal:CourseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
 } */

/** 
*Go to defination of @Partial there, see the use of  'in' operator
*/
 function createCourseGoalTitle(title: string, description: string, completeUntil:Date): Partial<CourseGoal> {
    //  return { title, description, completeUntil };
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
 }

 /**
  * From defination of Partial-
  */
 class Employee2 {
     id = 1;
     name = 'Sumeet';
 }

 /* 
It can only be used for type, It will fail in case of class, there we cannot use 'in'
along with 'keyof'. (keyof Employee2) returns union type - ('id' | 'name)
*/
type Person40 = {
     [t in (keyof Employee2)]: string
}


// class Person41 {
//      [t in (string | number )]: string
// }

/**
 * @ReadOnly
 * now we cannot add or remove proeprties to this array.
 * it works for objet also.
 */

let names7: Readonly<string[]> = ["Sumeet","Sood"];

let obj:Readonly<{name: string}> = {name: 'sumeet'};
//here we get error
//obj.name = 'sood';







