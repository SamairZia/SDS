var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path');
	
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/routes.js')(express, app);

server.listen(3002, function(){
	console.log('Server working...');
});

