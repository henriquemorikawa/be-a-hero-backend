const express = require('express');

const centersController = require('../../controller/centers.controller');

const router = express();

router.get('/', centersController.getMany); 
router.get('/:id', centersController.getOne); 
router.post('/', centersController.createOne); 
router.put('/:id', centersController.updateOne); 
router.delete('/:id', centersController.deleteOne); 

module.exports = router;
