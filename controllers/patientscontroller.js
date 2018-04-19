var sequelize = require("sequelize")
	exports = module.exports = {}
	models = require("../models");
	Patients = models.patients,
	PatientQA = models.patientqa,
	PatientQAFamily = models.patientqafamily,
	PatientHealth = models.patienthealth,
	PatientHealthFamily = models.patienthealthfamily

exports.addPatient = function(req,res,next){
	console.log("Patient controller is working");
	var keys = Object.keys(req.body);
	var chkKeys = [];
	keys.forEach(function(key, index){
		if(req.body[key] === 'on')
		{
			chkKeys.push(key);
		}
	})
	
	PatientQA.findAll().then(function (data){
		console.log(data);
	})
	
	// sequelize.transaction(function(t){
		// return Patients.create({
			// regno 			: req.body.regNo,
			// datereg 		: req.body.date,
			// name 			: req.bodyname,
			// parentpname		: req.body.parentpname,
			// houseaddress	: req.body.houseaddress,
			// workaddress		: req.body.workaddress,
			// maritalstatus	: req.body.mstatus,
			// occupation		: req.body.occupation,
			// phonenumber		: req.body.tel,
			// reference		: req.body.reference,
			// name			: req.body.name,
			// age 			: req.body.age,
			// sex				: req.body.sex,
			// balance			: 0
		// }, {transaction: t}).then(function(patient){
			
			// return PatientHealth.bulkCreate({
				// regno: req.body.regNo,
				// healthid: 
					
				// })
				// hospitalization
			// }, {transaction: t})
			
		// });
	// }).then(function (result){
		// res.send({
			// status: 'OK',
			// data: data
		// });
	// }).catch(function (err){
		// console.log(err)
	// });
	
}



