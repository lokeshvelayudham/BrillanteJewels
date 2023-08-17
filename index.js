// express app
const express = require('express');
const app = express();

// port connection
const port = process.env.PORT || 3000;

        // ejs front-end and ejs layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set("view engine", "ejs");
app.set('views', './views');

// static files for css, js etc...
app.use(express.static("./assets"));


// body parser middleware to parse the request data from client side
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })) ;// this will help us get form data in req object
app.use(express.json());


// db connection
const db = require('./config/mongoose');


// routes
app.use(express.json());
app.use('/', require('./routes/api'));

app.listen(port, function(err){
    if(err){
        console.log(`Error running the seerver: ${err}`);
    }
    console.log(`Server is running in the port: ${port}`);

})