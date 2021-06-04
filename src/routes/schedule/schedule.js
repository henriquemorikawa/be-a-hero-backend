const express = require('express')
const userController = require('../../controller/user.controller')

const router = express()

router.get('/schedule:id', userController.getOne)
router.put('/schedule:id', userController.updateOne)

module.exports = router