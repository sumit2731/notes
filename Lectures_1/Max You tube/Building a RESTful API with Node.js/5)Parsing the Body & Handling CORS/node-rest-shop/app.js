const express = require('express');
//it is used fir logging
const morgan = require('morgan');
//it is used to parse body of request
const bodyParser = require('body-parser');
//this will spin up express application where we can use all kinds of 
//of utility method and so on
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
//here we added a middleware, it will executed for all request
//our logging it intrenally calles next function and sends our request to next route
app.use(morgan('dev'));
// hre we apply BodyParser middle ware, it parses the body of request
//now we will have body property in our request handlers. to know about body-parser see notes
app.use(bodyParser.urlencoded({extended: false}));
// it parses json data and makes it easily reable for us
app.use(bodyParser.json());
// this middle ware attcahes headers so that we dnt get CORS errors
app.use((req,res,next)=>{
    // response is not send back response, this will just add headers to our response
    //now whereever i send response, my response will have these headers
    // headers are like key value pairs,here * means allow access to all origins
    //we can also restricted access to some urls. like we did here 
    // res.header('Access-Control-Allow-Origin', 'http://my-cool-page.com');
    res.header('Access-Control-Allow-Origin', '*');
    //it define which kind of headers we want to accept, i.e which headers may be sent along with request
    //* means anyting
    //res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With',Content-Type,Accept,Authorization");
    res.header('Access-Control-Allow-Headers','*');
    //then we check whether req method is options
    // browser always send options request first when you send post or put request  
    // here browser sees whether he is allowed to do so
    if (req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods','PUT,POST,DELETE,PATCH,GET');
        return res.status(200).json({});
    }
     next();
});
//this is middle ware that forwards our request to our routes
// request will be sent to this file only if it begins with /products  
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
//so we are adding middleware without any filter, for all request recahing here this function will be executed
//only those request will recah here, which cnt be handled by our existing middle ware which have filters
//so here we are doing error handling
app.use((req,res,next)=>{
    // here message of error will be 'Not found'
     const error = new Error('Not found');
     error.status =404;
     // here we are forwarding the error instaed of orgnal request
     //this error will be hadled by our next middle ware
     next(error);
});
//this middle ware will handle all kinds of errors, like the error we create
//and forward in above middleware or (that is why i choose this setup)
//error thrown from anywhere in application, this not happening right now but
//later when we will add database and we have operations doing work in database
//these operations can fail then we want to return the 500 error, whene thses
//operations fail they throw the error, this error is not caught by above middleware
//but this middle ware will handle them
 //this middleware has additional error argument
app.use((error,req,res,next)=>{
    // here we set status either equal to error status or 500 for all other errors
    res.status(error.status || 500);
    // we can also chain these togather as we are doing previously
    res.json({
        error: {
            // this is message of error that we receive as argument
            //most errors have this property
            message: error.message
        }
    });
});
// Here we are exporting the app
module.exports = app;