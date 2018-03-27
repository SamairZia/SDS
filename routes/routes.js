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
		if(req.isAuthenticated())
		{
			res.redirect('/main');
		}
		else
			res.render('index',{titlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	router.get('/signup', function (req, res, next)
	{
		res.render('signup');
	})
	
	router.get('/logout', function (req, res, next)
	{
		req.logout();
		res.redirect('/');
	})
	
	router.post('/signup', passport.authenticate('local-signup', 
	{
		successRedirect: '/main',
		failureRedirect: '/signup'
	}))
	
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
			console.log('Logged In');
			next();
		}
		else 
		{
			console.log('NOT Logged In');
			res.redirect('/');
		}
    }
		
	app.use('/', router);
}