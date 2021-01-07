"use strict";
class Author {
    constructor() {
        this.name = "";
    }
}
const json2Instance = (source, destinationConstructor) => Object.assign(new destinationConstructor(), JSON.parse(source));
const simon = json2Instance('{"name":"simon"}', Author);
//# sourceMappingURL=1)app.js.map