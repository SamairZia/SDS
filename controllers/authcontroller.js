var exports = module.exports = {}

exports.signup = function (req, res, next){
	res.render('signup');
}

exports.login = function (req,res, next){
	res.render('main',{titlePage: 'Home Page', user:req.body});
}