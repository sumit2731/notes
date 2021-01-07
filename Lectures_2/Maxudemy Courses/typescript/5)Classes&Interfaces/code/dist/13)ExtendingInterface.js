"use strict";
var Person13 = /** @class */ (function () {
    function Person13(n) {
        this.age = 30;
        this.name = n;
    }
    Person13.prototype.greet = function (name) {
        console.log("Greetings {$name}");
    };
    return Person13;
}());
var user13;
user13 = {
    name: "Sumeet",
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user13 = new Person13("Max");
user13.greet("Max");
var add13;
add13 = function (n1, n2) {
    return n1 + n2;
};
//# sourceMappingURL=13)ExtendingInterface.js.map