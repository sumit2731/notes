"use strict";
var Person14 = /** @class */ (function () {
    /*
    Here in cosntructor passing argument should be optional, because it is
    fine if we dnt want to have name property. so we can make passing argument
    to constructor optional by either using? or by giving it some default value. this
    is true for not only constructor but for any function
    */
    function Person14(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person14.prototype.greet = function (name) {
        console.log("Greetings {$name}");
    };
    return Person14;
}());
var user14;
user14 = new Person14("Max");
user14 = new Person14();
user14.greet("Max");
/*
syntax for defining functions in interface.
we can make them optional by adding '?' after
function name like-
    validation?: (flag: any) => boolean;
*/
/*
validation: (flag: any) => boolean;
validation(flag: any) : boolean;
validation: {(flag: any): boolean};
*/
/*
Compiling Interfaces to Javascript
If we look in js files, there we wnt find interface keywrod, or name of
any interface(like Greetable14). this is because there is no transltion for interfaces,
js does'nt know or understands interface. It is ts feature which is only avalible during development,
which helps us to write better code. At the run time, there will no race of interfaces. they are simply
dumped, you could say. They are used during compilation to check your code and they are ignored
*/ 
//# sourceMappingURL=14)optionalParametersAndProeprties.js.map