const express = require('express')
const userController = require('../../controller/user.controller')

const router = express()

router.get('/beahero:id', userController.getOne)
router.put('/beahero:id', userController.updateOne); 

module.exports = router