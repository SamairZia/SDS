var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path');
	
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));  
app.route('/').get(function(req, res,next) {  
    res.render('index',{TitlePage: 'Welcome to Shakir Dental Clinic'});
});

server.listen(3002, function(){
	console.log('Server working...');
});