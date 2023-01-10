var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController')

/* GET home page. */
router.get('/', employeeController.displayEmployee)

module.exports = router;
