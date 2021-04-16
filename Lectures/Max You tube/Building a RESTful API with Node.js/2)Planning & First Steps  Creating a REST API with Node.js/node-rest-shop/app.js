const express = require('express');
//this will spin up express application where we can use all kinds of 
//of utility method and so on
const app = express();
//this method sets up the middleware, each reaquest has to go through
//use and whatever i pass to it, things that we pass to it can have diffrent formats,here we pass function
// next is function that we use to move request to next middleware in line 
// if dnt use next then request dnt go ahead
// we can use res to send the response, 
app.use((req,res,next) => {
    // Here we are sending json response , by first sending the status code
    // then we use json to send a json response,it will set right headers to send json resonse
    // to json we pass a js object
    //object will be stringyfy
    res.status(200).json({
          message: 'it works'
    });

});
// Here we are exporting the app
module.exports = app;