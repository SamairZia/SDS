var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	env = require('dotenv').load(),
	session = require('express-session'),
	passport = require('passport');

//Models
var models = require("./models");

//app environment
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true })); // session secret
app.use(passport.initialize());
app.use(passport.session());

//strategy
require('./config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//routes
require('./routes/routes.js')(express, app, passport);

server.listen(3000, function(){
    console.log('Server working...');
});