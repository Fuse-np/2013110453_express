const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')

router.get("/",staffController.index);

router.post("/",staffController.insert);

module.exports = router