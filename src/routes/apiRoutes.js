const express = require('express');

const centersRoutes = require('./centers/centers.routes');
const benefitsRoutes = require('./benefits/benefits.routes');
const authRoutes = require('./auth/auth.routes');
const beaheroRoutes = require('./beahero/beahero.routes')
const callaheroRoutes = require('./callahero/callahero')

const protectedRoutesMiddleware = require('../middlewares/protectedRoutes/protectedRoutes.middleware');

const router = express();

router.use('/auth', authRoutes); 

router.use(protectedRoutesMiddleware.protect);

router.use('/centers', centersRoutes); 
router.use('/benefits', benefitsRoutes); 
router.use('/beahero', beaheroRoutes)
router.use('/callahero', callaheroRoutes)

module.exports = router;
