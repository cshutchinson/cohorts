// Create an Express server
// When you get a student, don't only show the student and cohortid, show the
// name of the cohort the student is in and the student's name with a JOIN.

// Display the results in an HTML page using XHR
// Display a list of all students in a certain cohort

var Express = require('express');
var app = Express();

var bodyParser = require('body-parser');
var api = require('./api');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
  res.redirect('/students');
});

// --- READ --- //
app.get('/students', function(req,res){
  api.students.read()
  .then(function(results){
    res.json(results);
  });
});

app.get('/students/:id', function(req, res){
  api.student.read(req.params.id)
  .then(function(results){
    res.json(results);
  })
})



app.listen(8000, function(){
  console.log('Server listening on port 8000');
});
