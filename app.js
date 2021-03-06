var express = require('express');
var mysql = require('mysql');
var app = express();
var expressHandlebars = require('express-handlebars');



var PORT = process.env.NODE_ENV || 3000; // the or || ensures it will always work because it means if env doesn't work, you'll use PORT 3000 

var connection = mysql.createConnection({
  port:3370,
  host:'localhost',
  user:'root',
  database:'wizard_schools_db'
});

connection.connect(function(err){
  if(err)
    throw err;
}

console.log("Connected at id: %s", connection.threadId);
});

app.get('/', function(req, res){
  connection.query("SELECT * FROM schools", function(err, results){

  });
});

app.listen(PORT);