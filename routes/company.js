const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')


router.get('/', companyController.company)

module.exports = router