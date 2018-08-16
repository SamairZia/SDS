module.exports = function (express, app){
	var router = express.Router(),
		treatmentcontroller = require('../controllers/treatmentcontroller.js')
	
	router.get('/', treatmentcontroller.treatment);
	
	app.use('/main/treatment', router);
}
