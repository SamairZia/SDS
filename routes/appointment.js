module.exports = function (express, app){
	var router = express.Router(),
		appointmentcontroller = require('../controllers/appointmentcontroller.js')
	
	router.post('/add', appointmentcontroller.addAppointment);
	
	router.get('/fetchAppNo', appointmentcontroller.fetchAppNo);
	
	app.use('/main/appointment', router);
}
