const express = require('express')

const requestsController = require('../../controller/requests.controller')

const router = express()

router.get('/', requestsController.getMany); 
router.get('/:id', requestsController.getOne); 
router.post('/', requestsController.createOne); 
router.put('/:id', requestsController.updateOne); 
router.delete('/:id', requestsController.deleteOne); 

module.exports = router