module.exports = function (express, app){
	var router = express.Router(),
		patientscontroller = require('../controllers/patientscontroller.js')
	
	router.post('/add', patientscontroller.addPatient);
	
	app.use('/main/patients', router);
}
