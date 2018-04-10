module.exports = function(express, app, passport)
{
	var router = express.Router(),
		authcontroller = require('../controllers/authcontroller.js')
		
	router.get('/', function(req, res, next)
	{
		if(req.isAuthenticated())
		{
			res.redirect('/main');
		}
		else
			res.render('index',{titlePage: 'Welcome to Shakir Dental Clinic'});
	})
	
	router.get('/logout', function (req, res, next)
	{
		req.logout();
		res.redirect('/');
	})
	
	router.get('/signup', authcontroller.signup)
	
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
	
	router.get('/main', isLoggedIn, authcontroller.login)
	
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