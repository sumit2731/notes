const { debug } = require("console");
const { getEventListener } = require("events");

let btn = $0;
let listeners = getEventListeners(btn);
debug(listeners.click[0].listner)