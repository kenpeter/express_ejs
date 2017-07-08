// require the needed dependencies
var express = require('express')
var stylus = require('stylus')
var nib = require('nib')
//var ejsLayouts = require('express-ejs-layouts')

var app = express()

// set view engine to ejs
app.set('view engine', 'ejs')

//app.use(ejsLayouts);

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))
app.use(express.static(__dirname + '/public'))

// create routes
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/contact', function(req, res) {
    res.render('contact');
})

// tell the application to listen on port 3000
app.listen(3000)
