const express = require('express');

const benefitsController = require('../../controller/benefits.controller')

const router = express();

router.get('/', benefitsController.getMany); 
router.get('/:id', benefitsController.getOne); 
router.post('/', benefitsController.createOne); 
router.put('/:id', benefitsController.updateOne); 
router.delete('/:id', benefitsController.deleteOne); 

module.exports = router;