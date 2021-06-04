const express = require('express');

const centersController = require('../../controller/centers.controller');

const router = express();

router.get('/centers', centersController.getMany); 
router.get('/centers:id', centersController.getOne); 
router.post('/centers', centersController.createOne); 
router.put('/centers:id', centersController.updateOne); 
router.delete('/centers:id', centersController.deleteOne); 

module.exports = router;
