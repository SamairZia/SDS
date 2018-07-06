var models = require("../models"),
	sequelize = models.sequelize,
	exports = module.exports = {},
	Appointment = models.appointment,
	Patients = models.patients
	

exports.addAppointment = function(req, res, next){
	console.log("Patient controller is working");
	
	var regNo = req.body.pRegNoApp,
		appNo = req.body.appointmentNo,
		date = req.body.appointmentDate,
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
		})
	}).catch(function (err){
		//rollback
		console.log(err)
	})
	
}

exports.getAppNo = function(req, res, next){
	
	var regNo = req.params.regNo;
	
	Appointment.findOne({
		attributes : [
			[sequelize.fn('max', sequelize.col('appno')), 'appno']
		],
		where : {
			regno : regNo
		}
	}).then(function(appointment){
		let appNo
		if (appointment.appNo===null){
			appNo = 0
		}
		else {
			appNo = appointment.appno;
		}
		
		appNo = appNo + 1;
		console.log(appNo);
		res.json({
			appNo: appNo
		});
		
	}).catch(function(error){
		console.log(error)
	})
}