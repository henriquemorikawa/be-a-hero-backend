const express = require('express')
const userController = require('../../controller/user.controller')

const router = express()

router.get('/:id', userController.getOne)
router.put('/:id', userController.updateOne); 

module.exports = router