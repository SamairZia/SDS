	module.exports = function(express, app, passport)
{
	var router = express.Router(),
		dashboardcontroller = require('../controllers/dashboardcontroller.js')
		
	router.get('/', function(req, res, next)
	{
		if(req.isAuthenticated())
		{
			res.redirect('/main/dashboard');
		}
		else {
			res.render('index',{
				titlePage: 'Welcome to Shakir Dental Clinic',
				layout:false
			});
		}
	})
	
	router.get('/logout', function (req, res, next)
	{
		req.logout();
		res.redirect('/');
	})

	router.get('/signup', dashboardcontroller.signup)
	
	router.post('/signup', passport.authenticate('local-signup', 
	{
		successRedirect: '/main/dashboard',
		failureRedirect: '/signup'
	}))
	
	router.post('/login', passport.authenticate('local-signin', 
	{
		successRedirect: '/main/dashboard',
		failureRedirect: '/'
	}))
	
	router.get('/main', isLoggedIn, function(req,res,next){
		res.redirect('/');
	})
	
	router.get('/main/dashboard', dashboardcontroller.login)
	
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
	
	///To protect all the routes ahead /main
	//app.use('/main/*', isLoggedIn);
}