// const http = require('http');
// const { requestHandler } = require("./routes");

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type ="text" name ="title"><button type="submit">Add Product</button></form>');
// });
// app.post('/product', (req,res,next) => {
//     console.log(req.body);
//     res.redirect('/');
// });
app.use(shopRoutes);

// app.use('/',(req,res,next) => {
//     res.send('<h1>Hello from Sumeet</h1>');
//     next(); // this allows request to continue to next middleware
// });

app.use((req,res,next) => {
   // res.sendFile(path.join(__dirname, '/views', '404.html'));
   res.render('404', {pageTitle: 'Page Not Found'});
});
// const server = http.createServer(requestHandler);

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
console.log(process.mainModule.filename);
console.log(path.dirname(process.mainModule.filename));
console.log(__dirname);

console.log('listening to 3000');
