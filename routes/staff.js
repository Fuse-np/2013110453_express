const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')

router.get("/",staffController.index);

router.get("/:id",staffController.show);

router.delete("/:id",staffController.destory);

router.put("/:id",staffController.update);

router.post("/",staffController.insert);

module.exports = router