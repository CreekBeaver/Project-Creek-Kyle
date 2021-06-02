// Boiler Plate Package Requirements. 
const express = require('express');
const app = express();

// Boiler Plate Pool Creation ------------
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_creekk',
  password        : '4515',
  database        : 'cs290_creekk'
});
module.exports.pool = pool;

// Handles x-www-form-urlencoded types
app.use(bodyParser.urlencoded({ extended: false }));
// Handles .json Data
app.use(bodyParser.json());
//app.set('port', 3000);
app.set('port', process.argv[2]);

// Handle Get Requests. 
app.get('/', (req, res) => {
	console.log('get request recieved');
	console.log('req', req);
	console.log('res', res);
	
	// If I get a Request, I Need to send it all the table data.
	//var sql = 'SELECT * FROM workouts';
	//let context = {};
	//pool.query(sql, function (err, rows, field) {
	//	if (err) {
	//		throw err;
	//	};
	// The following is going to be used to display table information on the Page. 
	//var tableInfo = [];
	//for (var i in rows) {
	//	tableInfo.push({'id':rows[i]['id'], 'name':rows[i]['name'],
	//					'reps':rows[i]['reps'], 'weight':rows[i]['weight'],
	//					'date': rows[i]['date'], 'lbs':rows[i]['lbs']});
	}
	// Here is the return statement. 
	//});
});

// Handle Post Requsets. 
app.post('/', (req, res) => {
	console.log('all valid inputs');
	var sql = "INSERT INTO workouts (name, reps, weight, date, lbs) VALUES ?";
	var values = [[req.body.Name, parseInt(req.body.Weight), parseInt(req.body.Weight), req.body.Date, req.body.Unit]];
	pool.query(sql, [values], function(err, result) {
		if(err) {
			throw err;
		};
		// Need a Return Statement
	});
});

app.get('/reset-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS workouts", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});
// Make the Port Listen
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});