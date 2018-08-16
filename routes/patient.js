module.exports = function (express, app){
	var router = express.Router(),
		patientcontroller = require('../controllers/patientcontroller.js')
		
	
	router.get('/', patientcontroller.patient);
	
	router.post('/add', patientcontroller.addPatient);
	
	router.get('/getPatientName/:regNo', patientcontroller.getPatientName);
	
	app.use('/main/patient', router);
}
