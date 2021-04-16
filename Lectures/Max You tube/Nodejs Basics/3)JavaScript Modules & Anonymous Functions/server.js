var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
function onRequest(request, response){
    module1.myFunction();
    module2.myFunction();
    //here we set header 
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //here we send reponse
    response.write(module1.mystring+" "+ module2.mystring);
    
    // here i tell that i am done with response , it can be sent to person
    response.end();
}
http.createServer(onRequest).listen(8000);