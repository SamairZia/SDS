var models = require("../models"),
	sequelize = models.sequelize,
	exports = module.exports = {},
	Patients = models.patients,
	PatientQA = models.patientqa,
	PatientQAFamily = models.patientqafamily,
	PatientHealth = models.patienthealth,
	PatientHealthFamily = models.patienthealthfamily

exports.addPatient = function(req,res,next){
	console.log("Patient controller is working");
	var regNo = req.body.regNo;
	var reqKeys = Object.keys(req.body);
	var reqQA = [];
	var reqQAFamily = [];
	var dataForPatientQA = [];
	var dataForPatientQAFamily = [];
	for (let problemQA of reqKeys){
		if(req.body[problemQA] === "on" && !problemQA.startsWith("fam")){
			reqQA.push(problemQA);
		}
		if(problemQA.startsWith("fam")){
			reqQAFamily.push(problemQA);
		}
	}
	
	PatientQA.findAll({
		where:{
			problem:reqQA
		}
	}).then(function (data){
		for (var i=0; i<reqQA.length; i++){
			for(var j=0; j<data.length; j++){
				if (reqQA[i] === data[j].problem){
					dataForPatientQA.push({
						regno : regNo,
						healthid : data[j].id
					})
					break
				}
			}
		}
	});
	
	PatientQAFamily.findAll({
		where:{
			problem:reqQAFamily
		}
	}).then(function (data){
		for (var i=0; i<reqQAFamily.length; i++){
			for(var j=0; j<data.length; j++){
				if (reqQAFamily[i] === data[j].problem){
					dataForPatientQAFamily.push({
						regno : regNo,
						healthfamilyid : data[j].id
					})
					break
				}
			}
		}
		
	});
	
	var dataForPatient = {
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
			balance			: 0,
			hospitalization : req.body.hospitalization
		}
	
	sequelize.transaction(function(t){
		return Patients.create(dataForPatient, {transaction: t})
		.then(function(patient){
			console.log(dataForPatientQA);
			return PatientHealth.bulkCreate(dataForPatientQA, {transaction: t})
			.then(function(somedata){
				console.log(dataForPatientQAFamily);
				return PatientHealthFamily.bulkCreate(dataForPatientQAFamily, {transaction: t})
			})
		})
	}).then(function (result){
		console.log(result);
		res.send({
			status: 'OK',
		})
	}).catch(function (err){
		// console.log(err)
	})
	
}



