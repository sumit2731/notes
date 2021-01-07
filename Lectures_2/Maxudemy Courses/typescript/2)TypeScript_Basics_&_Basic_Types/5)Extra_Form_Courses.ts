/* 
Diffrence between object vs Object vs {}

*/

/**
 * @object vs Object (lowercased) 
 * object represents all non-primitive types.
 * 
 * if we use Object as type then it can allow any type. so here Object works an any type. 
 * It is because in js everything extends Object.
 * 
 * all properties that exist on Obect can be accessed on object type.
 */

function onlyAllowObject (ob: object) {
    console.log(ob);
}


/**
 * @Difference between any and Object
 * Object (uppercased) describes functionality that is common to all JavaScript objects. That includes the 
 *  toString() and the hasOwnProperty() methods, for example. so on object you can call only that methods that
 *  are defined in Object defination
 * 
 * so if below object is of type Object, you cannot access proeprties name and method getName on it, even though,
 * they exist.same is thing for type {}
 */

 let sample: any = {
     name: 'Sumeet',
     getName() {
         return this.name;
     }
 }
 /**
  * if we give type Object(or object or {}) to sample then we will not be able to access methods and propertie on sample.
  * we can only access methods like toString()
  */
 console.log(sample.name);
 sample.getName();

/**
 * @links which explin the above thing
 * https://mariusschulz.com/blog/the-object-type-in-typescript
 * https://stackoverflow.com/questions/18961203/any-vs-object
 * 
 */



 /**
  * @Null_and_undefined
  * 
  * By default null and undefined are subtypes of all other types. That means you can assign null and undefined to 
  * something like number.However, when using the --strictNullChecks flag, null and undefined are only assignable 
  * to any and their respective types (the one exception being that undefined is also assignable to void)
  * 
  * link - https://www.staging-typescript.org/docs/handbook/basic-types.html#null-and-undefined
  */