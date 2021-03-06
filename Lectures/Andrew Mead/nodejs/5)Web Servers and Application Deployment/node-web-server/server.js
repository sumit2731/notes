const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log + '\n', (err) => {
        if (err) {
            console.log('Error has occured');
        } else {
            console.log('File Written');
        }
    });
    // fs.appendFileSync('server.log', log + '\n');
    next();

});
app.use ((req,res,next) => {
    res.render("maintainance.hbs");
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render("home.hbs", {
      pageTitle: "Home Page",
      welcomeMessage: 'Welocme to my website'

    });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad',(req,res) => {
    res.send({
        errorMesage: 'Unabale to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});