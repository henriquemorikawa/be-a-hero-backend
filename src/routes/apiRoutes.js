const express = require('express');

const centersRoutes = require('./centers/centers.routes');
const benefitsRoutes = require('./benefits/benefits.routes');
const authRoutes = require('./auth/auth.routes');
const homeRoutes = require('./home/home.routes')
const feedRoutes = require('./feed/feed.routes')
const beaheroRoutes = require('./beahero/beahero.routes')
const callaheroRoutes = require('./callahero/callahero')
const scheduleRoutes = require('./schedule/schedule')

const protectedRoutesMiddleware = require('../middlewares/protectedRoutes/protectedRoutes.middleware');

const router = express();

router.use('/auth', authRoutes); 

router.use(protectedRoutesMiddleware.protect);

router.use('/centers', centersRoutes); 
router.use('/benefits', benefitsRoutes); 
router.use('/home', homeRoutes)
router.use('/feed', feedRoutes)
router.use('/beahero', beaheroRoutes)
router.use('/callahero', callaheroRoutes)
router.use('/schedule', scheduleRoutes)

module.exports = router;
