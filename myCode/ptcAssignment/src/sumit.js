console.log("script file loaded");

require(["myAngular2App"], function(app) {
   app.runAngular2App(legacyModel); // Input to your APP
});