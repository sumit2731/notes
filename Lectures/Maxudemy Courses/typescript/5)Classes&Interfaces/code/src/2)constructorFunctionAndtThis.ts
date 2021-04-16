/* 
Clases are syntactical sugar for constructor Functions in js
Function in Objects are called methods
*/
class Department2 {
    
    name:string;

    constructor(n: string) {
        this.name = n;
    }

    /* 
    *To refer to class  property or name we need to use this keyword
    this then typically refers back to concrete instnace of this class that was
    created(because we call function with accounting.describe(), so here general 
    rule of what this will point into is folowed) and with '.' we can access all properties and methods.
    *we use just name,then it would look for a variable name which has to exist
    inside of this described method ot outside of class as a gloabl variable
    here we wnt get error for name because there actually is global variable in browser in window object
    */
    describe(this: Department2) {
        console.log('Department: ' + this.name);
    }
}

const accounting2 = new Department2('Accounting');
console.log(accounting2);
/* 
*now this in describe will refer to accouting object
*/
//accounting2.describe();

const accountingCopy2 = {describe: accounting2.describe};
/* 
*Here 'this' in describe function will point to accountingCopy
 output - Department:  undefined

To workaround 'this' problem we can add parameter to describe function of class,
that parameter is called 'this', that is a special parameter, a special instruction
understood by ts. It's not really a parameter, which is execpected. you can still call funnction
without passing any parameter.instead 'this' is iterpreted by typescript to be hint regarding what
'this'(it means  what 'this' inside funtion should refer to) should refer to, now its important to asign a 
type to this and the type here in this case should be our class type here. what I am saying with 
this is, when describe is executed, 'this' inside describe, should always refer to an instance that's
based on Department Class, so an Object which in the ends hould be of type Department.

Now we cannnot call department as method of object that is not of type Departent. so ts gives us
error in IDE.so here we add extra tyope safety by adding this dummy parameter. but we can make it work,
if we add name property to accountingCopy(add property and see). ts sees now ok, object on which
you are calling describe now has a name property just like 'this'(we are talking about this passed as 
parameter to describe) expects it to have, because 'this'(parameter of describe) is based on department
object, which also has a name proeprty

*/
//accountingCopy2.describe();