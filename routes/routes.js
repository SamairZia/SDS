module.exports = function(express, app, passport)
{
	var router = express.Router(),
		bodyParser = require('body-parser')
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded(
	{
		extended: true
	}));

	
	router.get('/', function(req, res, next)
	{
		res.render('index',{titlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	router.post('/login', passport.authenticate('local-signin', 
	{
            successRedirect: '/main',
 
            failureRedirect: '/'
	}))
	
	router.get('/main', isLoggedIn, function(req, res, next)
	{
		res.render('main',{titlePage: 'Home Page', user:req.body});
	})
	
	function isLoggedIn(req, res, next) 
	{
        if (req.isAuthenticated()) 
		{
			next();
		}
		else 
		{
			res.redirect('/');
		}
    }
		
	app.use('/', router);
}