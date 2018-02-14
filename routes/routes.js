module.exports = function(express, app){
	var router = express.Router();
	
	router.get('/', function(req, res, next){
		res.render('index',{TitlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	app.use('/', router);
}