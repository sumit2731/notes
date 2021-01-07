const express = require('express');
//this will spin up express application where we can use all kinds of 
//of utility method and so on
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
// request will be sent to this file only if it begins with /products  
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
// Here we are exporting the app
module.exports = app;