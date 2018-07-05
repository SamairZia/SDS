var models = require("../models"),
	sequelize = models.sequelize,
	exports = module.exports = {},
	Appointment = models.appointment,
	Patients = models.patients
	

exports.addAppointment = function(req, res, next){
	
	
}

exports.getAppNo = function(req, res, next){
	
	Appointment.find({
		attributes : [
			[sequelize.fn('max', sequelize.col('appno')), 'appno']
		]
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