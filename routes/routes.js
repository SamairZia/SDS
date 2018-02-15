module.exports = function(express, app){
	var router = express.Router(),
		bodyParser = require('body-parser')
	
	app.use(bodyParser.json());
	
	router.get('/', function(req, res, next){
		res.render('index',{TitlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	router.post('/login', function(req, res, next){
		console.log(req.body.userEmail);
		res.render('main',{TitlePage: 'Home Page'});
	})
	
	app.use('/', router);
}