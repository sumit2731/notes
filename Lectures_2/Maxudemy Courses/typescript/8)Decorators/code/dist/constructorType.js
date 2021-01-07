"use strict";
class Author {
    constructor(name) {
        console.log("constrcutor caled");
        console.log(name);
        this.name = name;
    }
}
/**
 * Using a given JSON string construct and populate an instance of the
 * supplied class constructor
 * @param source JSON request payload string that the API receives
 * @param destinationConstructor a class constructor
 */
const json2Instance = (source, destinationConstructor) => Object.assign(new destinationConstructor(), JSON.parse(source));
const simon = json2Instance('{"name":"simon"}', Author);
console.log(simon);
//# sourceMappingURL=constructorType.js.map