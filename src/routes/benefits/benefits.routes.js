const express = require('express');

const benefitsController = require('../../controller/benefits.controller')

const router = express();

router.get('/benefits', benefitsController.getMany); 
router.get('/benefits:id', benefitsController.getOne); 
router.post('/benefits', benefitsController.createOne); 
router.put('/benefits:id', benefitsController.updateOne); 
router.delete('/benefits:id', benefitsController.deleteOne); 

module.exports = router;