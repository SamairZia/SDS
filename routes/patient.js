module.exports = function (express, app, patients){
	var router = express.Router(),
		patientscontroller = require('../controllers/patientscontroller.js')
	
	router.post('/add', patientscontroller.addPatient);
	
	app.use('/patients', router);
}
