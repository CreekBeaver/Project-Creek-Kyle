// Boiler Plate Package Requirements. 
const express = require('express');
const app = express();
const process = require('process');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
const path = require('path');

// Set up for Body Parser to parse the Body of the Request. 
var bodyParser = require('body-parser');
// Allows the Body Parser to Accept Multiple Types. 

// Handles x-www-form-urlencoded types
app.use(bodyParser.urlencoded({ extended: false }));
// Handles .json Data
app.use(bodyParser.json());
// This is going to help with css styleSheets
app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//app.set('port', 3000);
app.set('port', process.argv[2]);

// Target the View's folder to ensure the path is correct.
app.set('views', path.join(__dirname, '/views'))


// Home Page
app.get('/', (req, res) => {
	res.render('home.handlebars', { title: "Home", style:'home'} );
});

// Dogs Page
app.get('/dogs', (req, res) => {
	res.render('dogs.handlebars', {  title: "Dogs", style:'dogs'} );
});

// Game Page
app.get('/game', (req, res) => {
	res.render('game.handlebars', { title: "Game", style:'game'} );
});

// Submission Page 
app.get('/submission', (req, res) => {
	res.render('submission.handlebars', { title: "Submission", style:'submission'} );
});


// Below are the Boiler Plate Error Handlers and Port Listeners.
app.use(function(req,res){
  res.status(404);
  res.render('404.handlebars');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500.handlebars');
});


// Make the Port Listen
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
