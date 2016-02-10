//be sure to checkout github commit 
var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var PORT = process.eng.NODE_ENV || 3000;
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);


var icecreams =  [ {name: 'vanilla', price: 10, awesomeness: 3}, 
{name: 'chocolate', price: 4, awesomeness: 8}, 
{name: 'banana', price: 1, awesomeness: 1}, 
{name: 'greentea', price: 5, awesomeness: 7}, 
{name: 'jawbreakers', price: 6, awesomeness: 2}, ];
console.log(icecreams[0]);

app.get('/', function (req, res) {
    res.render('home');
});

console.log("this worked");




