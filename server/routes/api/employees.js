const express = require("express");
const router = express.Router();
const EmployeeController = require('../../controllers/employee.js')
const Passport = require('passport');

router.get('/employees' ,EmployeeController.getEmployees)
router.get('/employee/:id', EmployeeController.getEmployeeById)
router.post('/employee', EmployeeController.createEmployee)
router.put('/employee/:id', EmployeeController.updateEmployee)
router.delete('/employee/:id', EmployeeController.deleteEmployee)

module.exports = router;
