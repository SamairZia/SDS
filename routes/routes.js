module.exports = function(express, app){
	var router = express.Router(),
		bodyParser = require('body-parser')
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
		})
	);
	
	router.get('/', function(req, res, next){
		res.render('index',{TitlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	router.post('/login', function(req, res, next){
		console.log(req.body.email);
		res.render('main',{TitlePage: 'Home Page', user:req.body} );
	})
	
	app.use('/', router);
}