/*
Interface decsribes the structure of Object, it describes
how object should like.interface is ts fetaure not present in js.
In inetrface we just decsribe how a Object should like, now unlike
class we will not use this as a bluepirnt, we will use it as a custom type.

Here we can only give type to properties, we cannot give them values. so a 
interface canot have a initializer
*/
interface Person {
    name: string;
    age: number;
    
    /* 
    We can also define methods but like properties
    we cannot define them we can just have structure of function in interface
    */
    greet(phrase: string): void;
}

/* 
What is use of interface? we can use it to assign types to our object
*/
let user: Person;
/* 
When ever we initialize it should have properties mentioned in Interface
*/
user = {
    name: 'Sumeet',
    age: 28,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};


/**
@Syntax for defining functions in interface -
    validation(flag: any) : boolean;
    validation: (flag: any) => boolean;
    validation: {(flag: any): boolean};
*/


let f1: { (flag: any): boolean };
f1 = (flag: boolean) => true;