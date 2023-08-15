// load express
const express = require('express');
const path = require('path');

//require the To Do "database"
const dogDb = require('./data/dog-db')

// create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//mount middleware (app.use)

//mount routes


//define a "root" route directly on app
//next lesson we'll use better practice routing
app.get('/', function(req, res) {
    //path must start with a leading slash
    res.redirect('/dog');
});

app.get('/home', function(req, res) {
    //never begin the name of the template with / (forward slash)
    res.render('home');
});

app.get('/dog', function(req, res) {
    const dogs = dogDb.getAll();
    res.render('dog/index', { dogs });
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});

