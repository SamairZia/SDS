var models = require("../models"),
	sequelize = models.sequelize,
	exports = module.exports = {},
	Appointment = models.appointment,
	Patients = models.patients
	

exports.addAppointment = function(req, res, next){
	
	
}

exports.fetchAppNo = function(req, res, next){
	
	Appointment.find({
		attributes : [
			[sequelize.fn('max', sequelize.col('appno')), 'appno']
		]
	}).then(function(appointment){
		let appno
		if (appointment.appno===null){
			appno = 0
			console.log("if loop " + appno);
		}
		else {
			appno = appointment.appno;
			console.log("else loop " + appno);
		}
		console.log(appointment)
		
		res.end();
	}).catch(function(error){
		console.log(error)
	})
}