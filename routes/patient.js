module.exports = function (express, app, patients){
	var router = express.Router()
	
	router.post('/add', function(req, res, next){
		var Patients =  patients;
		Patients.create({
			regno 			: req.body.regNo,
			datereg 		: req.body.date,
			name 			: req.bodyname,
			parentpname		: req.body.parentpname,
			houseaddress	: req.body.houseaddress,
			workaddress		: req.body.workaddress,
			maritalstatus	: req.body.mstatus,
			occupation		: req.body.occupation,
			phonenumber		: req.body.tel,
			reference		: req.body.reference,
			name			: req.body.name,
			age 			: req.body.age,
			sex				: req.body.sex,
			balance			: 0
		}).then(function(data){
			res.send({
				status: 'OK',
				data: data
			});
		})
		
	});
	
	app.use('/patients', router);
}
