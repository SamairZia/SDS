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
	var reqKeys = Object.keys(req.body); //taking out the object names from the JSON
	var reqQA = []; //stores object names for patientqa
	var reqQAFamily = []; //stores object names for patientqafamily
	var dataForPatientQA = []; //creates and store data for the bulk creation of data for patientqa
	var dataForPatientQAFamily = []; //creates and store data for the bulk creation of data for patientqafamily
	
	const util = require('util');
	//console.log(`post/${util.inspect(req.body,false,null)}`);
	
	
	//checkboxes are QA stuff
	//pushes object names checking which checkboxes are true OR 'on'
	for (let problemQA of reqKeys){
		if(!problemQA.startsWith("fam") && req.body[problemQA] === true){
			reqQA.push(problemQA);
		}
		if(problemQA.startsWith("fam") && req.body[problemQA] === true){
			reqQAFamily.push(problemQA);
		}
		console.log("QA is " + reqQA)
		console.log("QAfamily is " + reqQAFamily);
	}
	
	
	//looks up the database for the ID numbers of the QA
	PatientQA.findAll({
		where:{
			problem:reqQA
		}
	}).then(function (data){
		for (var i=0; i<reqQA.length; i++){
			for(var j=0; j<data.length; j++){
				if (reqQA[i] === data[j].problem){
					
					//all the QA names that are found using reqQA are stored in the dataForPatient
					dataForPatientQA.push({
						regno : regNo,
						healthid : data[j].id
					})
					break
				}
			}
		}
	});
	
	//looks up the database for the ID numbers of the QA
	PatientQAFamily.findAll({
		where:{
			problem:reqQAFamily
		}
	}).then(function (data){
		for (var i=0; i<reqQAFamily.length; i++){
			for(var j=0; j<data.length; j++){
				if (reqQAFamily[i] === data[j].problem){
					
					//all the QA names that are found using reqQA are stored in the dataForPatient
					dataForPatientQAFamily.push({
						regno : regNo,
						healthfamilyid : data[j].id
					})
					break
				}
			}
		}
		
	});
	
	//data is created for patient
	var dataForPatient = {
			regno 			: req.body.regNo,
			datereg 		: req.body.date,
			name 			: req.body.name,
			parentname		: req.body.pname,
			houseaddress	: req.body.houseAddress,
			workaddress		: req.body.workAddress,
			maritalstatus	: req.body.mstatus,
			occupation		: req.body.occupation,
			phonenumber		: req.body.tel,
			reference		: req.body.reference,
			name			: req.body.name,
			age 			: req.body.age,
			sex				: req.body.sex,
			balance			: 0,
			hospitalization : req.body.reason
		}
	
	// transaction helps rolling back - does not let anything create if any of the query fails
	// straight forward insert commands
	// bulk query does inserts in bulk
	// passing transaction: t to each create function lets the tracking of transaction whether to rollback or commit
	sequelize.transaction(function(t){
		return Patients.create(dataForPatient, {transaction: t})
		.then(function(patient){
			return PatientHealth.bulkCreate(dataForPatientQA, {transaction: t})
			.then(function(somedata){
				return PatientHealthFamily.bulkCreate(dataForPatientQAFamily, {transaction: t})
			})
		})
	}).then(function (result){
		//commit is done
		res.send({
			status: 'OK',
		})
	}).catch(function (err){
		//rollback
		console.log(err)
	})
	
}

	

