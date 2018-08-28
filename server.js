var express = require('express'),
	app = express(),
	exphbs = require('express-handlebars');
	server = require('http').createServer(app),
	path = require('path'),
	env = require('dotenv').load(),
	session = require('express-session'),
	passport = require('passport'),
	bodyParser = require('body-parser')
	

//Models
var models = require("./models");

//app environment
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'main'
}));

app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'keyboard cat', // session secret
	resave: true,
	saveUninitialized:true })); 
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended: true
}));

//sync models
models.sequelize.sync()
	.then(function(){		
		console.log("Models have been synced")
	})
	.catch(function(error){
		console.log(error)
	})
	
	
//strategy
require('./config/passport/passport.js')(passport, models.users);

//routes
require('./routes/main.js')(express, app, passport);
require('./routes/patient.js')(express, app);
require('./routes/appointment.js')(express, app);
require('./routes/treatment.js')(express, app);

server.listen(3000, function(){
    console.log('Server working...');
});