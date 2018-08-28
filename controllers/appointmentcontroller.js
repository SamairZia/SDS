var models = require("../models"),
	sequelize = models.sequelize,
	exports = module.exports = {},
	Appointment = models.appointment;
	


exports.appointment = function(req, res, next){
	res.render('appointment',{
		titlePage: 'SDS | Appointment',
	});
}

exports.addAppointment = function(req, res, next){
	console.log("Patient controller is working");
	
	let regNo = req.body.pRegNoApp,
		appNo = req.body.appointmentNo,
		date = req.body.date,
		time = req.body.appTime,
		comments = req.body.comments;
	
	Appointment.create({
		appno : appNo,
		regno : regNo,
		date  : date,
		time  : time,
		comments : comments		
	}).then(function(){
		//commit is done
		res.send({
			status: 'OK',
		});
	}).catch(function (err){
		//rollback
		console.log(err)
	})
	
}

exports.getAppNo = function(req, res, next){
	
	let regNo = req.params.regNo;
	console.log("regquest for appno " + regNo + " type is " + typeof(regNo));
	if(regNo){
		Appointment.findOne({
			attributes : [
				[sequelize.fn('max', sequelize.col('appno')), 'appno']
			],
			where : {
				regno : regNo
			}
		})
		.then(function(appointment){
			let appNo = 0;
			if (appointment.appno != null){
				appNo = appointment.appno;
				console.log("App object is ",appointment.get({
					raw:true
				}));
			}
			appNo = appNo + 1;
			console.log("App number is "+appNo);
			res.json({
				appNo: appNo
			});
		})
		.catch(function(error){
			console.log(error)
			res.status(500).json({
				error : "db error"
			})
		})
	}
	
}