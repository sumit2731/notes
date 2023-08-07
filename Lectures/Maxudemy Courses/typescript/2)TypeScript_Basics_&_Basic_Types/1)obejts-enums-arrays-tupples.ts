/**
 * Here typescript knows the type of this variable by the value
 * that we assign to it. This is called "Type Inference"
 */
let a = 1;
// Here inferred type is any
let a27;
/**
 * Here ts has infered object type. so we cannot access proeprty that
 *  does not exist here. this is same as defined object type as we did below
 */

 /**
 * @Desc Object Types
 */
const person = {
    name: "Sumeet Sood",
    age: 28
};
/* 
* As mentioned above we do not need to define this type, typescript
* infers it automatically.
*/
const person1: { name: string; age: number } = {
    name: "Sumeet Sood",
    age: 28
};

/* 
* Complex Object Types
*/

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
} = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};

/**
 * @Desc Array Types
 */

 /* implicit Type - hobbies:string[]
 noww it knows that each element is string, if we
 iterate over it in loop, it gives us IDE suggestions
 */
let hobbies = ['Coding','Driving'];
 
/* implicit Type - hobbies:(string | number | boolean)[]
    by using | we define union types
we can also give this type- any[] but above type is inferenced by typescript
*/
let hobbies2 = ["Coding", "Driving",4,true];


/**
 * @Desc Tupples are fixed length and fixed type arrays
 */

let person3 = {
     name: 'Sumeet Sood',
     age: 30,
     hobbies: ['Coding','Driving'],
     role: [2, 'author']
 }

 /* 
 Here we explain roles with a number than human readable description
 but down side is still we cn do these things-
 */
 person3.role.push(1);
 person3.role[1] = "Something"

 /* 
 this is possible because for typescript this is array which holds values of type number or string
 (this is type infered by typescript)but we want it to be 2 elements, first one to be nuber, 
 second to be of string. here we need to override typescript inference. lets see how we can do it
 */

 let person4 : {
     name: string;
     age: number;
     hobbies: string[];
     role: [number, string];
 } = {
     name: 'Sumeet Sood',
     age: 28,
     hobbies: ['Coding','Gym'],
     role: [2,'Author']
 }

/* 
Now role can be array with 2 elements, first one is number, second one is string. we will get error
if we try to change it. one exception is we can still do push. but we cannot do these things-
this is because we know that first element is number not string
*/
// person4.role[0] = 'admin'

/**
 * @Desc Enums these are constant, which you want to represents as number
 * but you want to assign a human readable label. it does not exist in js
 * enums are great construct whenever you need  identifiers that are human
 * readable and has some mapped values behind the scenes
 */

 /* 
 lets see how we do it without enums
 
 *approach1-
 let person = {
     name: 'sumeet',
     role:1
 };
 problem - here we will loose track what role no 1 and we can assign any number value to
 role

 *approach2-

 let person = {
     name: 'sumeet',
     role:'READ_ONLY_ROLE'
 };
 problem -
 if (person.role == 'READ-ONLY-ROLE') {
    console.log("We will never reach here");
 }
 problem - here we will never execute statement inside if because we are using wrong string for
 comparison, so we have to rememebr strings and again we can assign any string value to role. also we
 do not get any suggestions by ide


 *approach 3-
 const READ_ONLY_ROLE = 'READ_ONLY_ROLE';

 let person = {
     name: 'sumeet',
     role: READ_ONLY_ROLE
 };
 
 if (person.role ==  READ_ONLY_ROLE) {
    console.log("We will never reach here");
 }

 problem - Here we get IDE suggestions, but we hve to define and maintain these global constants and 
 again we can assign any value .string value to role.

 lets undertsand ENUMS and see how we can solve this problem by enums.
 */

 /* 
 this is how we create enums. enum keyword, {} then our identifiers
 These lables translates to numbers starting from 0 and we have human readable
 */
enum Role {ADMIN, READ_ONLY,AUTHOR};
/* 
Here we do not start from 1, so we have 5,6 and 7
*/
enum Role2 {ADMIN =5, READ_ONLY,AUTHOR};
// we can assign our own values
enum Role3 {ADMIN =11, READ_ONLY=12,AUTHOR=13};
// we dnt always have to go with numbers, we can assign our own values
enum Role4 {ADMIN ='Role1', READ_ONLY='Role2',AUTHOR=13};
// this is how we solve problem by enum, now role can have some minimum set of values
//that we have defined in enum and we get IDE suggestions
let role = Role.ADMIN;
if(role == Role.ADMIN) {
    //prints 0
    console.log(role);
}

/**
 * @From Ts Docs
 * A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, 
 *  if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the 
 *  corresponding name:
 */


enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above

// above does not work if enum holds value other name numbers, for example like string


/**
 * @Desc any type, do not use it, you will loose all ts advantages. 
 */

 let name1: any = 'sumeet';