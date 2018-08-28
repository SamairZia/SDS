module.exports = function (express, app){
	var router = express.Router(),
		patientcontroller = require('../controllers/patientcontroller.js')
		
	//opens the patient template
	router.get('/', patientcontroller.patient);
	
	//adds patient to the DB
	router.post('/add', patientcontroller.addPatient);
	
	//returns Name of the patient based on the regno
	router.get('/getPatientName/:regNo', patientcontroller.getPatientName);
	
	//returns all patient
	router.get('/getPatientAll', patientcontroller.getPatientAll);
	
	//returns the last regNo+1
	router.get('/getRegNo', patientcontroller.getRegNo);
	
	app.use('/main/patient', router);
}
