module.exports = function (express, app){
	var router = express.Router(),
		appointmentcontroller = require('../controllers/appointmentcontroller.js')
	
	router.get('/', appointmentcontroller.appointment);
	
	router.post('/add', appointmentcontroller.addAppointment);
	
	router.get('/getAppNo/:regNo', appointmentcontroller.getAppNo);
	
	app.use('/main/appointment', router);
}
