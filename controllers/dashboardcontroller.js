var exports = module.exports = {}

exports.signup = function (req, res, next){
	res.render('signup', {layout: false});
}

exports.login = function (req, res, next){
	res.render('dashboard',{
		titlePage: 'SDS | Dashboard',
		user:req.body
	});
}