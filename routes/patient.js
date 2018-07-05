module.exports = function (express, app){
	var router = express.Router(),
		patientscontroller = require('../controllers/patientscontroller.js')
	
	router.post('/add', patientscontroller.addPatient);
	
	router.get('/getPatientName/:regNo', patientscontroller.getPatientName);
	
	app.use('/main/patients', router);
}
