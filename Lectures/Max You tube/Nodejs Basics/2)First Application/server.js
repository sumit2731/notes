var http = require('http');
function onRequest(request, response){
    //here we set header 
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //here we send reponse
    response.write('Hello world');
    // here i tell that i am done with response , it can be sent to person
    response.end();
}
http.createServer(onRequest).listen(8000);