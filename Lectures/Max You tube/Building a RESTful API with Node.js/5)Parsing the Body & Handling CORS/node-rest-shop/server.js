//here we import something from node js and store it in http constant
// this is how we use import in nodejs
const http = require('http');
const app= require('./app');
//here we get the port either from either envirenment varibale
//or we use 3000
const port = process.env.PORT || 3000;
// here i create my server and store in contsnat server
//to create server i pass a listener, a function which is executed
//whenever we get new request and is responsible to sending response
// here we pass app to it, express application qulifies to be a request handler
 const server = http.createServer(app);
// here we are starting the server
// so it will start the server and execute the function or listener that we 
// have passed to createServer method
server.listen(port);
