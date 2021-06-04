const express = require('express');
const centersController = require('../../controller/centers.controller');
const benefitsController = require('../../controller/benefits.controller')

const router = express();

router.get('/home', centersController.getMany, benefitsController.getMany)

module.exports = router;