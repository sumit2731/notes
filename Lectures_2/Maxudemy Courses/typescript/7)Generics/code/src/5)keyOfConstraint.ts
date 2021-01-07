/* 
Here we get errors if dnt define type of obj and key.
error is that they have implicit type any, we can fix that error by changing tsconfig.json. lets say we
dnt want to do that.

then we assign types to obj and key, thne we get error that key may not exis on obj.to solve this we can use generics
*/

/* function extractAndConvert2(obj: object, key: string) {
    return obj[key];
} */
/* 
Here we used keyOf constraints on generic. to know detail of keyOf operator see- file 8 of section -Advanced Types
*/
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

/* 
Now ts knows type of name1 is string.
also we get error by ide if name proeprty does not exist on object passed as
first argument
*/
let name1 = extractAndConvert({id: 1, name: 'Sumeet'}, 'name');

/* 
if we use constructor syntax then ts is not able to detect which propertie exist
on object
*/
// class Emp {
//     name: string= '';
//     constructor (name: string) {
//         this.name = name;
//     }
// }

class Emp {
  //name: string = "";
  constructor(public name: string) {
  }
}

let e1 = new Emp('Sumeet');
console.log(extractAndConvert(e1, 'name'));

/**
 * @DefaultValue of generics, see this Link-
 * https://mariusschulz.com/blog/generic-parameter-defaults-in-typescript
 */