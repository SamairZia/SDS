var exports = module.exports = {}

exports.treatment = function(req, res, next){
	res.render('treatment',{
		titlePage: 'SDS | Treatment',
	});
}