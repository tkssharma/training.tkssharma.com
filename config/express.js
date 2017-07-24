var config = require('./config.js'),
express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
session = require('express-session');

module.exports = function (){
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended : true
	}));

	app.use(bodyParser.json());

	app.use(methodOverride());


	app.set('views', 'public');
	app.set('view engine', 'ejs');

	app.use(express.static('public'));
	 app.get('/', function(req,res){
		   res.render('index');
	})
	return app;

}