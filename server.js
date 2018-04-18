// server.js

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	config = require('./config/DB'),
	coinRoutes = require('./expressRoutes/coinRoutes');

var http = require('http');

	mongoose.Promise = global.Promise;
	mongoose.connect(config.DB).then(
			() => { console.log('Database is connected') },
			err => { console.log('Can not connect to the database' + err)}
		);
	
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	var port = process.env.PORT || 4000;

	app.use('/coins', coinRoutes);
	app.use('/', function () {
		console.log('adfadfasdfadfadf');
	});

	// var server = app.listen(function() {
	// 	console.log("Listening on port " + port);
	// 	console.log("Server Started!!!");
	// });

	http.createServer(app).listen(port, function () {
		console.log("Listening on port " + port);
	});

	/*http.createServer(function(req, res) {
	    res.writeHead(200, {
	          'content-type': 'text/plain'
	});
	res.end('It works');
	}).listen(port);*/