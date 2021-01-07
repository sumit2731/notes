"use strict";
var e2 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
/*
typeGuard helps us with union type because whilst it is nice to have flexibility
often you need to know which exact type you are getting now at runtime.

This is because althrough our function accepts diffrent types, but you do different things
depending upon type of argument.
*/
function add(a, b) {
    /* This is typeGuard. it allows us to utilize the flexibikity of union types gives us and
     still ensures that our code runs correctly at run time. we decide what do to based on
     types of parameters. this is typeGuard using typeof. w ecan also write other types of
     type guard
     using typeof */
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    /*
    Both Employee2 and Admin2 have name property, so this will always work
    */
    console.log('Name: ' + emp.name);
    /*
    *here we cannot use typeof, because typeof of argument will always be object, also
    we cannot use -
      if(emp.privileges)
    ts will give error.
    
    so we use in keyword which is built into js to create our type guard.
    this is js code that allows us to check if a property exists on objec
    */
    if ("privileges" in emp) {
        console.log("privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start date: " + emp.startDate);
    }
}
printEmployeeInformation(e2);
//# sourceMappingURL=2)moreOnTypeGuards.js.map