function myFunction() {
    console.log('Function called from module1');
}
var mystring = "String from module 1";
module.exports.myFunction = myFunction;
module.exports.mystring = mystring;